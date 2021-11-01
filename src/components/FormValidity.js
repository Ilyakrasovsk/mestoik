class FormValidator {
  constructor(seting, formElement){
    this._formElement = formElement;
    this._seting = seting;
  }
  _showInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._seting.inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add(this._seting.errorClass);
  }
  _hideInputError(inputElement) {
    this._errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._seting.inputErrorClass);
    this._errorElement.classList.remove(this._seting.errorClass);
    this._errorElement.textContent = ' ';
  }
  _chekInputValidity(inputElement) {
    if(!inputElement.validity.valid){
      this._showInputError(inputElement);

    } else {
      this._hideInputError(inputElement);
    }
  }
  _hasNoInputValid() {
    return this._inputList.every((inputElement) => {
      return inputElement.value.lenght === 0;
    });
  }
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _toggleButtonState() {
    if (this._hasInvalidInput(this._inputList) || this._hasNoInputValid(this._inputList)) {
      this.disableSubmitButton();
    } else {
      this.enebleSubmitButton();
    }
  }
  disableSubmitButton() {
      this._buttonElement.classList.add(this._seting.inactiveButtonClass);
      this._buttonElement.disabled = true;
  }
  enebleSubmitButton() {
    this._buttonElement.classList.remove(this._seting.inactiveButtonClass);
    this._buttonElement.disabled = false;
  }
  disableInptErr() {
    this._inputList.forEach(inputElement => {
      this._hideInputError(inputElement);
    })
  }
  _setEventListeners() {
    this._inputList = Array.from(this._formElement.querySelectorAll(this._seting.inputSelector));
    this._buttonElement = this._formElement.querySelector(this._seting.submitButtonSelector);
    this._inputList.forEach(inputElement => {
      inputElement.addEventListener('input', ()=> {
        this._chekInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
    this._toggleButtonState();
  }
  enableValidation(){
    this._formElement.addEventListener('submit', (event) => {
      event.preventDefault();
    });
    this._setEventListeners();
  }

}
export default FormValidator;
