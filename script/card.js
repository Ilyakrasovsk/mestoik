const popupImageCard = document.querySelector('.popup_images');
const popupMesto = popupImageCard.querySelector('.popup__mesto');
const popupImage = popupImageCard.querySelector('.popup__imag');

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
function closePopup (popupElement) {
  popupElement.classList.remove('popup_open');
  document.removeEventListener('keydown', closePopupEscape);
  document.removeEventListener('mousedown', cardFormModalWindow);
};
function cardFormModalWindow(evt){
  const activePopup = document.querySelector('.popup_open');
  if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__cross')) {
    closePopup(activePopup);
  }
};


class Card {
  constructor(data, selector){
    this._link = data.link;
    this._name = data.name;
    this._selector = selector;
  }
  _getElement() {
    const cardElement = document.querySelector(this._selector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }
  generate() {
    this._element = this._getElement();
    this._setEventListener();

    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__photo').src = this._link;
    this._element.querySelector('.element__photo').alt = this._name;

    return this._element;
  }
  _cardLike(evt){
    evt.target.classList.toggle('element__like_active');
  }
  _cardDelete(){
    this._element.remove();
    //this._element = null;
  }
  _openPopupImages(){

    popupImage.src = this._link;
    popupImage.alt = this._name;
    popupMesto.textContent = this._name;
    openPopup(popupImageCard);
  }
  _closePopupImages(){
    closePopup(popupImageCard);
  }
  _setEventListener(){
    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
      this._cardLike(evt);
    });
    this._element.querySelector('.element__basket').addEventListener('click', () => {
      this._cardDelete();
    });
    this._element.querySelector('.element__photo').addEventListener('click', (evt) => {
      this._openPopupImages();
    });

  }
}

export default Card;
