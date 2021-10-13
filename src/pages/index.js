import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidity.js';

import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Section from '../components/Section.js';

import {
  elementCards,
  buttonEdit,
  popupProfile,
  nameInput,
  profInput,
  profileName,
  profileProf,
  buttonPopupAdd,
  popupAdd,
  popupImageCard,
  popupImage,
  //element,
  popupMesto,
  cardsContainer,
  cardElementTemplate,
  //cardSelector,
  inputMesto,
  inputLink,
  formCard,
  formElementProfile,
  defultConfig
} from '../utils/constants.js';

const popupFullImage = new PopupWithImage(popupImageCard);

const cardClick = (name, link) => {
  popupFullImage.open(name, link);
};

const renderCard = function (data, cardSelector) {
	const card = new Card({
		data: data,
		handleCardClick: (name, link) => {
			cardClick(name, link);
		},
	}, cardSelector);
  return card;
}

const cardList = new Section ({
  data: elementCards,
  renderer: (item) => {

    const card = renderCard(item, '#element__template');
    const cardElement = card.generate();
    cardList.setItem(cardElement);
  },
},cardsContainer
);

cardList.addItem();

const addModalCard = new PopupWithForm ({
  popupSelector: popupAdd,
  formSabmitHandler: (value) => {
      const card = renderCard({ name: value.mesto, link: value.link}, '#element__template');
      //const card = renderCard(value, user.getUserInfo(), '#element__template');
      cardList.setItem(card.generate());
      addModalCard.close();
  },
});

buttonPopupAdd.addEventListener('click', () => {
  addModalCard.open();
  formCard.mesto.value = '';
  formCard.link.value = '';
});

const user = new UserInfo({userName: profileName, userProf: profileProf});

const addModalProfile = new PopupWithForm({
  popupSelector: popupProfile,
  formSabmitHandler: (value) => {
      user.setUserInfo(value.name, value.prof);
      addModalProfile.close();
  }
});

buttonEdit.addEventListener('click', () => {
  addModalProfile.open();
  const userData = user.getUserInfo();
	formElementProfile.name.value = userData.name;
	formElementProfile.prof.value = userData.prof;
});

const cardFormValidity = new FormValidator(defultConfig, formCard);
const profileElementFormValidity = new FormValidator(defultConfig, formElementProfile);
addModalProfile.setEventListeners();
addModalCard.setEventListeners();
popupFullImage.setEventListeners();
cardFormValidity.enableValidation();
profileElementFormValidity.enableValidation();
