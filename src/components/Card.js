class Card {
  constructor({ data, handleCardClick }, cardSelector){
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();
    this._elementPhoto = this._element.querySelector('.element__photo');

    this._element.querySelector('.element__title').textContent = this._name;
    this._elementPhoto.src = this._link;
    this._elementPhoto.alt = this._name;

    return this._element;
  }
  _cardLike(evt){
    evt.target.classList.toggle('element__like_active');
  }
  _cardDelete(){
    this._element.remove();
    this._element = null;
  }

  _setEventListeners(){
    const buttonLike = this._element.querySelector('.element__like');
    const buttonBasket = this._element.querySelector('.element__basket');
    const buttonImage = this._element.querySelector('.element__photo');

    buttonLike.addEventListener('click', (evt) => {
      this._cardLike(evt);
    });
    buttonBasket.addEventListener('click', () => {
      this._cardDelete();
    });
    buttonImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}

export default Card;
