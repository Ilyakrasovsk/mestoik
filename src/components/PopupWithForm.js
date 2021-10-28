import Popup from './Popup.js';

class PopupWithForm extends Popup {
  constructor({popupSelector, formSabmitHandler}){
    super(popupSelector);
    this._popup = super.returnPopup();
    this._formSabmitHandler = formSabmitHandler;
    this._inputSelectors = this._popup.querySelectorAll('.popup__item');
    this._popupButton = this._popup.querySelector('.popup__button');
    this._popupButtonValue = this._popupButton.value;
  }
  _getInputValues(){
    this._formValid = {};
    this._inputList = Array.from(this._inputSelectors);
    this._inputList.forEach(input => this._formValid[input.name] = input.value);
    return this._formValid;
  }
  setEventListeners(){
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSabmitHandler(this._getInputValues());
    })
    //this._popup.querySelector('.popup__input-container').reset();
    super.setEventListeners();
  }
  close(){
    super.close();
    this._popup.querySelector('.popup__input-container').reset();
  }
};
export default PopupWithForm;
