const optionsValidation = {
  errorClass: '.error',
  inputSelector: '.popup__inputs',
  submitButtonSelector: '.popup__button-save',
  popupButtonSaveInactive: 'popup__button_disabled',
  formSelector: '.popup__container',
};

//показывает сообщение об ошибке
function showInput(formElement, inputElement, errorMessage, optionsValidation) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(optionsValidation.errorClass); //'.error'
  errorElement.textContent = errorMessage;
  errorElement.classList.add(optionsValidation.errorClass //'.error'
  );
}

//скрывает сообщения об ошибке
function hideInput(formElement, inputElement, optionsValidation) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(optionsValidation.errorClass); //'.error'
  errorElement.classList.remove(optionsValidation.errorClass); //'.error'
  errorElement.textContent = '';
}

//проверяет валидность
function checkInputValidity(formElement, inputElement, optionsValidation) {
  if (!inputElement.validity.valid) {
    showInput(formElement, inputElement, inputElement.validationMessage, optionsValidation);
  } else {
    hideInput(formElement, inputElement, optionsValidation);
  }
}

// создает массив и устанавливает слушателя и изменения состояния кнопки
function setEventListeners(formElement, optionsValidation) {
  const inputList = Array.from(formElement.querySelectorAll(optionsValidation.inputSelector)); //.popup__inputs
  const buttonElement = formElement.querySelector(optionsValidation.submitButtonSelector); //.popup__button-save
  toggleButtonState(inputList, buttonElement, optionsValidation.inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, optionsValidation);
      toggleButtonState(inputList, buttonElement, optionsValidation.inactiveButtonClass);
    });
  });
}

// создает массив и устанавливает слушатешлей
function enableValidation(optionsValidation) {
  const formList = Array.from(document.querySelectorAll(optionsValidation.formSelector)); //.popup__container
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, optionsValidation);
  });
}

// проверяет прохождение валидности
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
  if (hasInvalidInput(inputList)) {

    buttonElement.classList.add(optionsValidation.popupButtonSaveInactive); //popup__button_disabled
    buttonElement.disabled = true;

  } else {
    buttonElement.classList.remove(optionsValidation.popupButtonSaveInactive); //popup__button_disabled
    buttonElement.disabled = false;
  }
}



enableValidation(optionsValidation);






