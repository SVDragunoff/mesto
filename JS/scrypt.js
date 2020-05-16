const editProfile = document.querySelector('.profile__info-button');
const closeProfile = document.querySelector('.popup__button-close');
const formElement = document.querySelector('.popup');
const saveButton = document.querySelector('.popup__button-save');
const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');
let nameInput = document.querySelector('.popup__inputs_name');
let jobInput = document.querySelector('.popup__inputs_job');

//нужно разобраться, как объединить функции открытия и закрытия Popup
function openPopup () {
    
    formElement.classList.add('popup_open');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}
// функция закрытия "Попап"
function closePopup () {
    formElement.classList.remove('popup_open');
}








// функция присвоения введенных данных в окне "Попап" в соответствующие поля
function formSubmitHandler (evt) {
    evt.preventDefault(); 

  
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup();
}
//кнопка "редактирование"
editProfile.addEventListener('click', openPopup);
//кновка "крест"
closeProfile.addEventListener('click', closePopup);
//кновка "сохранить"
formElement.addEventListener('submit', formSubmitHandler);

