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
  element,
  popupMesto,
  cardsContainer,
  cardElementTemplate,
  inputMesto,
  inputLink,
  formCard,
  formElementProfile,
  enableValidation
} from '../utils/constants.js';

const popupFullImage = new PopupWithImage(popupImageCard);

const cardClick = (name, link) => {
  popupFullImage.open(name, link);
}

const renderCard = function (data, cardSelector) {
	return new Card({
		data: data,
		handleCardClick: (name, link) => {
			cardClick(name, link);
		},
	}, cardSelector);
}


const сardList = new Section ({
  data: elementCards,
  renderer: (item) => {

    const card = renderCard(item, '#element-template');
    const cardElement = card.generate();
    сardList.setItem(cardElement);
  },
},cardsContainer
);

сardList.addItem();

const addModalCard = new PopupWithForm ({
  popupSelector: popupAdd,
  formSabmitHandler: (value) => {

      //const card = renderCard(data, user.getUserInfo(), '#element-template');
      const card = renderCard({ name: value.mesto, link: value.link}, '#element-template');
      cardList.setItem(card.generate());
      addModalCard.close();
  },
});

// buttonEdit.addEventListener('click', () => openProfilePopup(popupProfile));
buttonPopupAdd.addEventListener('click', () => {
  addModalCard.open();
  formCard.mesto.value = '';
  formCard.link.value = '';
});

const user = new UserInfo(userName, userProf);

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


// function profileFormSubmitHandler (evt) {
// 	evt.preventDefault();
//
// 	 profileName.textContent = nameInput.value;
// 	 profileProf.textContent = profInput.value;
//
//    closePopup (popupProfile);
// };
//
// formElementProfile.addEventListener('submit', profileFormSubmitHandler);


// const addCard = (data) => {
//   const card = new Card(data, '#element__template');
//   const cardElemen = card.generate();
//   cardsContainer.prepend(cardElemen);
// }
// const cardFormSubmitHandler = (evt) => {
// 	evt.preventDefault();
//     addCard({
//       name: inputMesto.value,
//       link: inputLink.value
//     });
//   closePopup(popupAdd);
//   formCard.reset();
// };
//
// formCard.addEventListener('submit', cardFormSubmitHandler);
// elementCards.forEach((data) => {
//   addCard(data);
// });
//
// function cardFormModalWindow(evt){
//   const activePopup = document.querySelector('.popup_open');
//   if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__cross')) {
//     closePopup(activePopup);
//   }
// };
const cardFormValidity = new FormValidator(defultConfig, formCard);
const profileElementFormValidity = new FormValidator(defultConfig, formElementProfile);
addModalProfile.setEventListeners();
addModalCard.setEventListeners();
popupFullImage.setEventListeners();
cardFormValidity.enableValidation();
profileElementFormValidity.enableValidation();
