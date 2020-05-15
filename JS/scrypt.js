const editProfile = document.querySelector('.profile__info-button');
const closeProfile = document.querySelector('.popup__button-close');
const formElement = document.querySelector('.popup');
const saveButton = document.querySelector('.popup__button-save');
const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');
let nameInput = document.querySelector('.popup__inputs_name');
let jobInput = document.querySelector('.popup__inputs_job');

//нужно разобраться, как объединить функции открытия и закрытия PopupА
function openPopup () {
    formElement.classList.add('popup_open');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}
function closePopup () {
    formElement.classList.remove('popup_open');
}









function formSubmitHandler (evt) {
    evt.preventDefault(); 

  
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup();
}

editProfile.addEventListener('click', openPopup);
closeProfile.addEventListener('click', closePopup);

formElement.addEventListener('submit', formSubmitHandler);

