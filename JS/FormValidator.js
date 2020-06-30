export class FormValidator{
  constructor(formElement, optionsValidation) {
    this._formElement = formElement;
    this._optionsValidation = optionsValidation;      
}

//показывает сообщение об ошибке
_showInput(inputElement, errorMessage) {
  const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(this._optionsValidation.errorClass); //'.error'
  errorElement.textContent = errorMessage;
  errorElement.classList.add(this._optionsValidation.errorClass //'.error'
  );
}

//скрывает сообщения об ошибке
_hideInput(inputElement) {
  const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(this._optionsValidation.errorClass); //'.error'
  errorElement.classList.remove(this._optionsValidation.errorClass); //'.error'
  errorElement.textContent = '';
}

//проверяет валидность
_checkInputValidity(inputElement) {
  if (!inputElement.validity.valid) {
    this._showInput(inputElement, inputElement.validationMessage, this._optionsValidation);
  } else {
    this._hideInput(inputElement, this._optionsValidation);
  }
}

// создает массив и устанавливает слушателя и изменения состояния кнопки
_setEventListeners = () => {
  const inputList = Array.from(this._formElement.querySelectorAll(this._optionsValidation.inputSelector)); //.popup__inputs
  const buttonElement = this._formElement.querySelector(this._optionsValidation.submitButtonSelector); //.popup__button-save
  this._toggleButtonState(inputList, buttonElement, this._optionsValidation);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement, this._optionsValidation);
      this._toggleButtonState(inputList, buttonElement, this._optionsValidation);
    });
  });
}

//устанавливает слушателей
enableValidation = () => {      
  this._setEventListeners(this._optionsValidation);
}

// проверяет прохождение валидности
_hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

_toggleButtonState = (inputList, buttonElement, optionsValidation) => {
  if (this._hasInvalidInput(inputList)) {
    
    buttonElement.classList.add(optionsValidation.popupButtonSaveInactive); //popup__button_disabled
    buttonElement.disabled = true;

  } else {
    buttonElement.classList.remove(optionsValidation.popupButtonSaveInactive); //popup__button_disabled
    buttonElement.disabled = false;
  }
}





}




