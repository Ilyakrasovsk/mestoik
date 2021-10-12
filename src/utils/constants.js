export const elementCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
export const buttonEdit = document.querySelector('.profile__edit-button');
export const popupProfile =  '.popup';
export const nameInput = document.querySelector('#name');
export const profInput = document.querySelector('#prof');
export const profileName = document.querySelector('.profile__name');
export const profileProf = document.querySelector('.profile__prof');
export const buttonPopupAdd = document.querySelector('.profile__add-button');
export const popupAdd = '.popup_add';

export const popupImageCard = '.popup_images';
export const popupImage = '.popup__imag';
//export const element = '.element';
export const popupMesto = '.popup__mesto';

export const defultConfig = {
  formSelector: '.popup__input-container',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__error_visible'
};
export const cardsContainer = '.elements';
//export const cardElementTemplate = document.querySelector('#element__template').content;

export const inputMesto = document.querySelector('#mesto');
export const inputLink = document.querySelector('#link');
export const formCard = document.querySelector('.popup__input-container_add');
export const formElementProfile = document.querySelector('.popup__container');
