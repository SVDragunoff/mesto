
export class FormValidator{
  constructor(formElement, optionsValidation) {
    this._formElement = formElement;
    this._optionsValidation = optionsValidation;
    
    this._errorClass = this._formElement.errorClass;
    this._inputSelector = this._formElement.inputSelector;
    this._submitButtonSelector = this._formElement.submitButtonSelector;
    this._popupButtonSaveInactive = this._formElement.popupButtonSaveInactive;
    this._formSelector = this._formElement.formSelector;

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

//Очищает форму
clearErrors() {
  this._inputs = Array.from(this._formElement.querySelectorAll(this._optionsValidation.inputSelector));
  const buttonElement = this._formElement.querySelector(this._optionsValidation.submitButtonSelector);
  this._inputs.forEach(inputElement => this._hideInput(inputElement));
  this._toggleButtonState(this._inputs,buttonElement);
  //this._formElement.reset();
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
  this._toggleButtonState(inputList, buttonElement, this._optionsValidation.popupButtonSaveInactive);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      this._checkInputValidity(inputElement, this._optionsValidation);
      this._toggleButtonState(inputList, buttonElement, this._optionsValidation.popupButtonSaveInactive);
    });
  });
}

//устанавливает слушателей
enableValidation = () => {      
  this._setEventListeners();
}

// проверяет прохождение валидности
_hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}
//Изменяет состояние кнопки
_toggleButtonState = (inputList, buttonElement) => {
  if (this._hasInvalidInput(inputList)) {
    
    buttonElement.classList.add(this._optionsValidation.popupButtonSaveInactive); //popup__button_disabled
    buttonElement.disabled = true;

  } else {
    buttonElement.classList.remove(this._optionsValidation.popupButtonSaveInactive); //popup__button_disabled
    buttonElement.disabled = false;
  }
}





}




