import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidity.js';

import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';
import PopupWithDelete from '../components/PopupWithDelete.js';
import Api from '../components/Api.js';
import {
  buttonEdit,
  popupProfile,
  userName,
  userProf,
  buttonPopupAdd,
  popupAdd,
  popupImageCard,
  cardsContainer,
  formCard,
  formElementProfile,
  popupAvatar,
  popupDeleteCard,
  avatarProfile,
  formElementAvatar,
  defultConfig
} from '../utils/constants.js';

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-29',
  headers: {
    authorization: '66763194-dff7-4592-9eca-89f9d6503745',
    "content-type": 'application/json'
  }
})
const popupFullImage = new PopupWithImage(popupImageCard);

const cardClick = (name, link) => {
  popupFullImage.open(name, link);
}

const renderCard = function (data, userData, cardSelector) {
	const card = new Card({
		data: data,
    userData: userData,
		handleCardClick: (name, link) => {
			cardClick(name, link);
  	},
    handleLikeClick: (cardId) => {
      if (card.cardLike()) {
        api.cardLikeRemove(cardId)
          .then((data) => {
            card.likesNumber(data)
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        api.likeCard(cardId)
          .then((data) => {
            card.likesNumber(data)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    handleDelIconClick: (element, cardId) => {
      delModalCard.open({element, cardId})
    },
  },cardSelector);
  return card;
}

const cardList = new Section({
  data: {},
  renderer: (item, userData) => {
    const card = renderCard(item, userData, '#element__template');
    const cardElement = card.generate();
    cardList.setItem(cardElement);
  },
},cardsContainer
);

const promises = [api.getCardInitial(), api.getInfoPersone()]

Promise.all(promises)
  .then(([resCard, resUser]) => {
    user.setUserInfo(resUser._id, resUser.name, resUser.about, resUser.avatar);
    cardList.setItemsRendered(resCard);
    cardList.addItem(resUser);

    buttonEdit.addEventListener('click', () => {
      profileElementFormValidity.disableInptErr();
      profileElementFormValidity.enebleSubmitButton();
      addModalProfile.open();
      const userData = user.getUserInfo();
    	formElementProfile.name.value = userData.name;
    	formElementProfile.prof.value = userData.about;
    });

    avatarProfile.addEventListener('click', () => {
      avatarFormValidity.disableInptErr();
      avatarFormValidity.disableSubmitButton();
      addModalAvatar.open();
    });

    buttonPopupAdd.addEventListener('click', () => {
      cardFormValidity.disableInptErr();
      cardFormValidity.disableSubmitButton();
      addModalCard.open();
    });
  })
  .catch((error) => {
    console.log(error);
  })

function loadingRender(popup, isLoad) {
  const popupButton = document.querySelector(popup).querySelector('.popup__button');
  if(isLoad) {
    popupButton.value = '????????????????????...';
  } else {
    popupButton.value = '??????????????????';
  }
}

const addModalCard = new PopupWithForm({
  popupSelector: popupAdd,
  formSabmitHandler: (value) => {
    loadingRender(popupAdd, true);
    api.addNewCard({
      name: value.mesto,
      link: value.link
    })
    .then(data => {
      const card = renderCard(data, user.getUserInfo(), '#element__template');
      cardList.setPreItem(card.generate());
      addModalCard.close();
    })
    .catch((error) => {
      console.log(error)
    })
    .finally((ignore) => {
      loadingRender(popupAdd, false);
    });
  }
});

const user = new UserInfo({
  userName: userName,
  userProf: userProf,
  userAvatar: avatarProfile
});

const addModalProfile = new PopupWithForm({
  popupSelector: popupProfile,
  formSabmitHandler: (value) => {
    loadingRender(popupProfile, true);
    api.sendUserInfo({ name: value.name, about: value.prof })
    .then(data => {
      user.setUserInfo(data._id, data.name, data.about, data.avatar);
      addModalProfile.close();
    })
    .catch((error) => {
      console.log(error)
    })
    .finally((ignore) => {
      loadingRender(popupProfile, false);
    });
  }
});

const addModalAvatar = new PopupWithForm({
  popupSelector: popupAvatar,
  formSabmitHandler: (value) => {
    loadingRender(popupAvatar, true);
    api.editAvatar({avatar: value.link})
    .then(data => {
      user.setUserInfo(data._id, data.name, data.about, data.avatar);
      addModalAvatar.close();
    })
    .catch((error) => {
      console.log(error)
    })
    .finally((ignore) => {
      loadingRender(popupAvatar, false);
    });
  }
});

const delModalCard = new PopupWithDelete({
  popupSelector: popupDeleteCard,
  formSabmitHandler: ({element, cardId}) => {
    api.deleteCard(cardId)
    .then(() => {
      element.remove();
      delModalCard.close();
    })
    .catch((error) => {
      console.log(error)
    });
  }
});

const cardFormValidity = new FormValidator(defultConfig, formCard);
const profileElementFormValidity = new FormValidator(defultConfig, formElementProfile);
const avatarFormValidity = new FormValidator(defultConfig, formElementAvatar);

addModalAvatar.setEventListeners();
delModalCard.setEventListeners();
addModalProfile.setEventListeners();
addModalCard.setEventListeners();
popupFullImage.setEventListeners();

avatarFormValidity.enableValidation();
cardFormValidity.enableValidation();
profileElementFormValidity.enableValidation();
