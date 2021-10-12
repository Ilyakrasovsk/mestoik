 class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
  }
  open(){
    this._popup.classList.add('popup_open');
    document.addEventListener('keydown',this._handleEscClose.bind(this));
    document.addEventListener('mousedown',this._cardFormModalWindow.bind(this));
  }
  close(){
    this._popup.classList.remove('popup_open');
    document.removeEventListener('keydown',this._handleEscClose.bind(this));
      document.removeEventListener('mousedown',this._cardFormModalWindow.bind(this));
  }
  _handleEscClose(evt){
    //const popupActive = document.querySelector('.popup_open');
    if (evt.key === 'Escape') {
    this.close();
    }
  }
  _cardFormModalWindow(evt){
    //const activePopup = document.querySelector('.popup_open');
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
