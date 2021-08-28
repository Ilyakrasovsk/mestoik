const editButton = document.querySelector('.profile__edit-button');
const close = document.querySelector('.popup__cross');
const pop =  document.querySelector('.popup');
const nameInput = document.querySelector('#name');
const profInput = document.querySelector('#prof');
const profileName = document.querySelector('.profile__name');
const profileProf = document.querySelector('.profile__prof');
const addButton = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup-add');
const closeAdd = document.querySelector('.popup__cross-add');

function openPopup(popElement) {
  popElement.classList.add('popup_open');
  nameInput.value = profileName.textContent;
  profInput.value = profileProf.textContent;
}
function closePopup (popElement) {
  popElement.classList.remove('popup_open');
}
editButton.addEventListener('click', () => openPopup(pop));
close.addEventListener('click',() => closePopup(pop));
addButton.addEventListener('click', () => openPopup(addPopup));
closeAdd.addEventListener('click',() => closePopup(addPopup));


const imagePopup = document.querySelector('.popup-images');
const popupImag = imagePopup.querySelector('.popup-images__imag');
const element = document.querySelector('.element');
const popupMesto = imagePopup.querySelector('.popup-images__mesto');
const closeImage = imagePopup.querySelector('.popup-images__cross');

function openPopupImag() {
  imagePopup.classList.add('popup-images_open');
};

function closePopupImage() {
  imagePopup.classList.remove('popup-images_open');
}
closeImage.addEventListener('click', closePopupImage);

const formElement = document.querySelector('.popup__container');
function formSubmitHandler (evt) {
	evt.preventDefault();

	 profileName.textContent = nameInput.value;
	 profileProf.textContent = profInput.value;

   closePopup (pop);
}

formElement.addEventListener('submit', formSubmitHandler);

const elements = document.querySelector('.elements');
const elementTempl = document.querySelector('#element__template').content;
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
const formCard = document.querySelector('.popup__input-container-add');


const addCard = (data) => {
  const cardElement = elementTempl.querySelector('.element').cloneNode(true);
  const cardtitle = cardElement.querySelector('.element__title');
  cardElement.querySelector('.element__title').textContent = data.name;
  cardElement.querySelector('.element__photo').src = data.link;

  cardElement.querySelector('.element__like').addEventListener('click', function (evt) {
  evt.target.classList.toggle('element__like_active');
 });
  cardElement.querySelector('.element__basket').addEventListener('click', function () {
  cardElement.remove();
 });
  cardElement.querySelector('.element__photo').addEventListener('click',function (evt) {
  const images = evt.target;
  popupImag.src = images.src;
  popupMesto.textContent = cardtitle.textContent;

  openPopupImag();
 });
  elements.prepend(cardElement);
};

const formSubmitHandl = (evt) => {
	evt.preventDefault();
    addCard({
      name: inputMesto.value,
      link: inputLink.value
    });
  closePopup(addPopup);
  formCard.reset();
};

formCard.addEventListener('submit', formSubmitHandl);
  elementCards.forEach((post) => {
  addCard(post);
});
