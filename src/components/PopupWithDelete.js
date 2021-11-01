import Popup from './Popup.js'

class PopupWithDelete extends Popup{
  constructor({popupSelector, formSabmitHandler}) {
    super(popupSelector);
    this._formSabmitHandler = formSabmitHandler;
  }
  setEventListeners() {
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._formSabmitHandler(this._deleteElement);
    })
    super.setEventListeners();
  }
  open(data) {
    super.open();
    this._deleteElement = data;
  }
}
export default PopupWithDelete;
