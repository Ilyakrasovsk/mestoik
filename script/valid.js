
const showInputError = (inputElement, errorElement, inputErrorClass, errorClass) => {
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
};
const hideInputError = (inputElement, errorElement, inputErrorClass, errorClass) => {
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = ' ';
};

const chekInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  if(!inputElement.validity.valid){
    showInputError(inputElement, errorElement, inputErrorClass, errorClass);

  } else {
    hideInputError(inputElement, errorElement, inputErrorClass, errorClass);
  }
};
const hasNoInputValid = (inputList) => {
  return inputList.every(inputElement => {
    return inputElement.value.lenght === 0;
  });
};
const hasInvalidInput = (inputList) => {
  return inputList.some(inputElement => {
    return !inputElement.validity.valid;
  });
};
const toggleButtonState = (formElement, inputList, submitButtonSelector, inactiveButtonClass)=> {
  const buttonElement = formElement.querySelector(submitButtonSelector);

  if (hasInvalidInput(inputList) || hasNoInputValid(inputList)) {
    disableSubmitButton(buttonElement, inactiveButtonClass);
  } else {
    enebleSubmitButton(buttonElement, inactiveButtonClass);
  }
};

const disableSubmitButton = (buttonElement, inactiveButtonClass ) => {
  buttonElement.classList.add(inactiveButtonClass);
};

const enebleSubmitButton = (buttonElement, inactiveButtonClass ) => {
  buttonElement.classList.remove(inactiveButtonClass);
};
const setEventListener = (formElement, inputSelector, submitButtonSelector, inputErrorClass, errorClass, inactiveButtonClass) => {
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    toggleButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass);
  });
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', ()=> {
      chekInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass);
    });
  });
  toggleButtonState(formElement, inputList, submitButtonSelector, inactiveButtonClass);
};

const enableValidation = (config) => {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach(formElement => {
    setEventListener(formElement, config.inputSelector, config.submitButtonSelector, config.inputErrorClass, config.errorClass, config.inactiveButtonClass);
  });
};

enableValidation({
  formSelector: '.popup__input-container',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__error_visible'
});
