export default class Popup {
  constructor(popupSelector){
    this._popup = document.querySelector(popupSelector);
  }
  open(){
    this._popup.classList.add('popup_open');
    document.addEventListener('keydown',this._handleEscClose.bind(this));
    // document.addEventListener('keydown',(evt) => {
    //   this._handleEscClose(evt);});
    document.addEventListener('mousedown',this._cardFormModalWindow.bind(this));
    // document.addEventListener('mousedown',(evt) => {
    //   this._cardFormModalWindow(evt);});
  }
  close(){
    this._popup.classList.remove('popup_open');
    document.addEventListener('keydown',this._handleEscClose.bind(this));
      document.addEventListener('mousedown',this._cardFormModalWindow.bind(this));
    // document.removeEventListener('keydown', (evt) => {
    //   this._handleEscClose(evt);});
    // document.addEventListener('mousedown', (evt) => {
    //   this._cardFormModalWindow(evt);});
  }
  _handleEscClose(evt){
    //const popupActive = document.querySelector('.popup_open');
    if (evt.key === 'Escape') {
    tihs.close();
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
