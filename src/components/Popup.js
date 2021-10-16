 class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
    this._cardFormModalWindow = this._cardFormModalWindow.bind(this);
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open(){
    this._popup.classList.add('popup_open');
    document.addEventListener('keydown',this._handleEscClose);
    document.addEventListener('mousedown',this._cardFormModalWindow);
  }
  close(){
    this._popup.classList.remove('popup_open');
    document.removeEventListener('keydown',this._handleEscClose);
    document.removeEventListener('mousedown',this._cardFormModalWindow);
  }
  _handleEscClose(evt){
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  _cardFormModalWindow(evt){
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__cross')) {
      this.close();
    }
  }
  setEventListeners(){
    const popupClose = this._popup.querySelector('.popup__cross');
    popupClose.addEventListener('click', () => {
      this.close();
   });
  }
  returnPopup(){
    return this._popup;
  }
};
export default Popup;
