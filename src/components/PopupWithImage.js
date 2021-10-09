import Popup from './Popup.js';
export default class PopupWithImage extends Popup{
  constructor(popupSelector){
    super(popupSelector);
    this._popup = super.returnPopup();
    this._popupMesto = this._popup.querySelector('.popup__mesto');
    this._popupImage = this._popup.querySelector('.popup__imag');
  }
  open(name, link){
    super.open();
    this._popupMesto.textContent = name;
    this._popupImage.src = link;
    this._popupImage.alt = name;
    // this._popup.querySelector('.popup__mesto').textContent = name;
    // this._popup.querySelector('.popup__imag').src = link;
    // this._popup.querySelector('.popup__imag').alt = name;
  }
};
