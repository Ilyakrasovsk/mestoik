class Card {
  constructor({ data, handleCardClick }, cardSelector){
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    //this._data = data;
  }
  _getElement() {
    const cardElement = document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    return cardElement;
  }
  generate() {
    this._element = this._getElement();
    this._setEventListeners();

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
    this._element = null;
  }

  _setEventListener(){
    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
      this._cardLike(evt);
    });
    this._element.querySelector('.element__basket').addEventListener('click', () => {
      this._cardDelete();
    });
    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}

export default Card;
