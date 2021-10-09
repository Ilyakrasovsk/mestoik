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
};
const renderCard = function (data, selector) {
	return new Card({
		data: data,
		handleCardClick: (name, link) => {
			clickCard(name, link);
		},
	}, selector);
};
const cardList = new Section ({
  data: elementCards,
  renderer: (item) => {
    // const card = new Card ({
		// 	data: item,
		// 	handleCardClick: (name, link) => {
		// 		cardClick(name, link);
		// 	},
		// }, cardElementTemplate);
    const card = renderCard(item, '#element-template');
    const cardElement = card.generate();
    cardList.addItem(cardElement);
  },
},cardsContainer);

cardList.renderItems();

const addModalCard = new PopupWithForm ({
  popupSelector: popupAdd,
  formSabmitHandler: (value) => {
    // const rendererCard = function (data, selector) {
    //   return new Card ({
    //     data: data,
    //     handleCardClick: (name, link) => {
    //       cardclick(name, link);
    //     },
    //   },selector);
    // }
    const card = rendererCard({ name: value.title, link: value.link }, '#element-template');
    cardList.addItem(card.generate());
    addModalCard.close();
  },
});



// function closePopupEscape (evt) {
//   const popupActive = document.querySelector('.popup_open');
//   if (evt.key === 'Escape') {
//   closePopup(popupActive);
//   }
// };
//
// export function openPopup(popupElement) {
//   popupElement.classList.add('popup_open');
//   document.addEventListener('keydown', closePopupEscape);
//   document.addEventListener('mousedown', cardFormModalWindow);
// };
//
// function openProfilePopup() {
//   nameInput.value = profileName.textContent;
//   profInput.value = profileProf.textContent;
//   openPopup(popupProfile);
// };
// function closePopup (popupElement) {
//   popupElement.classList.remove('popup_open');
//   document.removeEventListener('keydown', closePopupEscape);
// };
//buttonEdit.addEventListener('click', () => openProfilePopup(popupProfile));
buttonPopupAdd.addEventListener('click', () => {
  addModalCard.open();
  inputMesto.value = '';
  inputLink.value = '';
});

const user = new UserInfo(name, prof);

const addModalProfile = new PopupWithForm({
  popupSelector: popupProfile,
  formSabmitHandler: (value) => {
    user.setUserInfo(value.name, value.prof);
    addModalProfile.close();
  }
});
buttonEdit.addEventListener('click', () => {
  addModalProfile.open();
  const userItem = user.getUserInfo();
	formElementProfile.name.value = userItem.name;
	formElementProfile.prof.value = userItem.prof;
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
const cardFormValidity = new FormValidator(enableValidation, formCard);
const profileElementFormValidity = new FormValidator(enableValidation, formElementProfile);
addModalProfile.setEventListeners();
addModalCard.setEventListeners();
popupFullImage.setEventListeners();
cardFormValidity.enableValidation();
profileElementFormValidity.enableValidation();
