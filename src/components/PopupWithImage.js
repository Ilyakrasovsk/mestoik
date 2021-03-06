import Popup from './Popup.js';
class PopupWithImage extends Popup {
  constructor(popupSelector){
    super(popupSelector);
    this._popupMesto = this._popup.querySelector('.popup__mesto');
    this._popupImage = this._popup.querySelector('.popup__imag');
  }
  open(name, link){
    super.open();
    this._popupMesto.textContent = name;
    this._popupImage.src = link;
    this._popupImage.alt = name;
  }
};
export default PopupWithImage;
