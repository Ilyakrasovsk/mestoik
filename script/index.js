const buttonEdit = document.querySelector('.profile__edit-button');
const popupProfile =  document.querySelector('.popup');
const nameInput = document.querySelector('#name');
const profInput = document.querySelector('#prof');
const profileName = document.querySelector('.profile__name');
const profileProf = document.querySelector('.profile__prof');
const buttonPopupAdd = document.querySelector('.profile__add-button');
const popupAdd = document.querySelector('.popup_add');
//const popupCloseAdd = document.querySelector('.popup__cross_add');
//const buttonPopupClose = document.querySelector('.popup__cross');

function closePopupEscape (evt) {
  const popupActive = document.querySelector('.popup_open');
  if (evt.key === 'Escape') {
  closePopup(popupActive);
  }
};

function openPopup(popupElement) {
  popupElement.classList.add('popup_open');
  document.addEventListener('keydown', closePopupEscape);
  document.addEventListener('mousedown', cardFormModalWindow);
};

// popupProfile.addEventListener('click',() => closePopup(popupProfile));
// document.querySelector('.popup__container').addEventListener('click', function (evt) {
//   evt.stopPropagation();
// });
// popupAdd.addEventListener('click',() => closePopup(popupAdd));
// document.querySelector('.popup__container_add').addEventListener('click', function (evt) {
//   evt.stopPropagation();
// });

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
buttonPopupAdd.addEventListener('click', () => openPopup(popupAdd));
//popupCloseAdd.addEventListener('click',() => closePopup(popupAdd));
//buttonPopupClose.addEventListener('click',() => closePopup(popupProfile));

const popupImageCard = document.querySelector('.popup_images');
const popupImage = popupImageCard.querySelector('.popup__imag');
const element = document.querySelector('.element');
const popupMesto = popupImageCard.querySelector('.popup__mesto');
//const popupCloseImageCard = popupImageCard.querySelector('.popup__cross_images');


const formElement = document.querySelector('.popup__container');
function profileFormSubmitHandler (evt) {
	evt.preventDefault();

	 profileName.textContent = nameInput.value;
	 profileProf.textContent = profInput.value;

   closePopup (popupProfile);
};

formElement.addEventListener('submit', profileFormSubmitHandler);

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

function creatCard(data){
    const cardElement = cardElementTemplate.querySelector('.element').cloneNode(true);
    const cardtitle = cardElement.querySelector('.element__title');
    cardElement.querySelector('.element__title').textContent = data.name;
    cardElement.querySelector('.element__photo').src = data.link;
    cardElement.querySelector('.element__photo').alt = data.name;

    cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like_active');
   });
    cardElement.querySelector('.element__basket').addEventListener('click', function () {
    cardElement.remove();
   });
    cardElement.querySelector('.element__photo').addEventListener('click',function (evt) {
    const images = evt.target;
    popupImage.src = images.src;
    popupImage.alt = cardtitle.textContent;
    popupMesto.textContent = cardtitle.textContent;

    openPopup(popupImageCard);
   });
   return cardElement;
};

function addCard(data){
    cardsContainer.prepend(creatCard(data));
};

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


//Сделал немного другую реализацию закрытия по оверлею

function cardFormModalWindow(evt){
  const activePopup = document.querySelector('.popup_open');
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__cross')) {
    closePopup(activePopup);
  }
};


// const cardFormModalWindow = document.querySelector('.popup_images');
// cardFormModalWindow.addEventListener('click', (evt) => {
//   if (evt.target.classList.contains('popup_images') || evt.target.classList.contains('popup__cross_images')) {
//     closePopup(cardFormModalWindow);
//   }
// });
