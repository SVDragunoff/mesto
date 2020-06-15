const optionsValidation = {
  errorClass: '.error',
  inputSelector: '.popup__inputs',
  submitButtonSelector: '.popup__button-save',
  popupButtonSaveInactive: 'popup__button_disabled',
  formSelector: '.popup__container',
};

//показывает сообщение об ошибке
function showInput(formElement, inputElement, errorMessage) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(optionsValidation.errorClass); //'.error'
  errorElement.textContent = errorMessage;
  errorElement.classList.add(optionsValidation.errorClass //'.error'
  );
}

//скрывает сообщения об ошибке
function hideInput(formElement, inputElement) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(optionsValidation.errorClass); //'.error'
  errorElement.classList.remove(optionsValidation.errorClass); //'.error'
  errorElement.textContent = '';
}

//проверяет валидность
function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInput(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInput(formElement, inputElement);
  }
}

// создает массив и устанавливает слушателя и изменения состояния кнопки
function setEventListeners(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(optionsValidation.inputSelector)); //.popup__inputs
  const buttonElement = formElement.querySelector(optionsValidation.submitButtonSelector); //.popup__button-save
  toggleButtonState(inputList, buttonElement, optionsValidation.inactiveButtonClass);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement);
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

    buttonElement.classList.toggle(optionsValidation.popupButtonSaveInactive); //popup__button_disabled
    buttonElement.disabled = true;

  } else {
    buttonElement.classList.remove(optionsValidation.popupButtonSaveInactive); //popup__button_disabled
    buttonElement.disabled = false;
  }
}



enableValidation(optionsValidation);






