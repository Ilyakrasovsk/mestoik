class Card {
  constructor({ data, userData, handleCardClick, handleLikeClick, handleDelIconClick }, cardSelector){
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._data = data;
    this._handleLikeClick = handleLikeClick;
    this._handleDelIconClick = handleDelIconClick;
    this._userData = userData
    // this._buttonLike = this._element.querySelector('.element__like');
    // this._buttonBasket = this._element.querySelector('.element__basket');
    // this._buttonImage = this._element.querySelector('.element__photo');
    // this._likeQuantity = this._element.qeurySelector('.element__quantity');

  }
  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);
    return cardElement;
  }
  generate(){
    this._element = this._getTemplate();
    this._setEventListeners();
    this._cardDelete();
    this.likesNumber(this._data);

    this._buttonImage.src = this._link;
    this._buttonImage.alt = this._name;
    this._element.querySelector('.element__title').textContent = this._name;

    return this._element;
  }
  cardLike(){
    if (this._data.likes.some((like) => like._id === this._userData._id))
    return true
    else return false
  }
  likesNumber(data){
    this._data = data;
    this._likeQuantity.textContent = this._data.likes.length;
    if(this.cardLike()) {
      this._buttonLike.classList.add('element__like_active')
    } else {
      this._buttonLike.classList.remove('element__like_active')
    }
  }
  _cardDelete(){
    if (this._userData._id !== this._data.owner._id)
    this._element.querySelector('.element__basket').remove()
  }
  _setEventListeners(){
    this._buttonLike = this._element.querySelector('.element__like');
    this._buttonBasket = this._element.querySelector('.element__basket');
    this._buttonImage = this._element.querySelector('.element__photo');
    this._likeQuantity = this._element.querySelector('.element__quantity');

    this._buttonLike.addEventListener('click', () => {
      this._handleLikeClick(this._data._id)
    });
    this._buttonBasket.addEventListener('click', () => {
      this._handleDelIconClick(this._element, this._data._id)
    });
    this._buttonImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link)
    });
  }
}

export default Card;
