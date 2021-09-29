import Card from './Card.js';
import FormValidator from './FormValidity.js';
const buttonEdit = document.querySelector('.profile__edit-button');
const popupProfile =  document.querySelector('.popup');
const nameInput = document.querySelector('#name');
const profInput = document.querySelector('#prof');
const profileName = document.querySelector('.profile__name');
const profileProf = document.querySelector('.profile__prof');
const buttonPopupAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');

function closePopupEscape (evt) {
  const popupActive = document.querySelector('.popup_open');
  if (evt.key === 'Escape') {
  closePopup(popupActive);
  }
};

export function openPopup(popupElement) {
  popupElement.classList.add('popup_open');
  document.addEventListener('keydown', closePopupEscape);
  document.addEventListener('mousedown', cardFormModalWindow);
};

function openProfilePopup() {
  nameInput.value = profileName.textContent;
  profInput.value = profileProf.textContent;
  openPopup(popupProfile);
};
function closePopup (popupElement) {
  popupElement.classList.remove('popup_open');
  document.removeEventListener('keydown', closePopupEscape);
};
buttonEdit.addEventListener('click', () => openProfilePopup(popupProfile));
buttonPopupAdd.addEventListener('click', function () {
    inputMesto.value = '';
    inputLink.value = '';
   openPopup(popupAdd);
});

const popupImageCard = document.querySelector('.popup_images');
const popupImage = popupImageCard.querySelector('.popup__imag');
const element = document.querySelector('.element');
const popupMesto = popupImageCard.querySelector('.popup__mesto');

const formElementProfile = document.querySelector('.popup__container');
function profileFormSubmitHandler (evt) {
	evt.preventDefault();

	 profileName.textContent = nameInput.value;
	 profileProf.textContent = profInput.value;

   closePopup (popupProfile);
};

formElementProfile.addEventListener('submit', profileFormSubmitHandler);

const cardsContainer = document.querySelector('.elements');
const cardElementTemplate = document.querySelector('#element__template').content;
const elementCards = [
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

const inputMesto = document.querySelector('#mesto');
const inputLink = document.querySelector('#link');
const formCard = document.querySelector('.popup__input-container_add');

const addCard = (data) => {
  const card = new Card(data, '#element__template');
  const cardElemen = card.generate();
  cardsContainer.prepend(cardElemen);
}
const cardFormSubmitHandler = (evt) => {
	evt.preventDefault();
    addCard({
      name: inputMesto.value,
      link: inputLink.value
    });
  closePopup(popupAdd);
  formCard.reset();
};

formCard.addEventListener('submit', cardFormSubmitHandler);
elementCards.forEach((data) => {
  addCard(data);
});

function cardFormModalWindow(evt){
  const activePopup = document.querySelector('.popup_open');
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__cross')) {
    closePopup(activePopup);
  }
};
const enableValidation = {
  formSelector: '.popup__input-container',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__error_visible'
};
const cardFormValidity = new FormValidator(enableValidation, formCard);
const profileElementFormValidity = new FormValidator(enableValidation, formElementProfile);

cardFormValidity.enableValidation();
profileElementFormValidity.enableValidation();
