const editProfile = document.querySelector('.profile__info-button');
const closeProfile = document.querySelector('.popup__button-close');

function openPopup () {
    document.querySelector('.popup').style.display = "flex";
}
function closePopup () {
    document.querySelector('.popup').style.display = "none";
}
editProfile.addEventListener('click', openPopup);
closeProfile.addEventListener('click', closePopup);

const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');



const formElement = document.querySelector('.popup');


function formSubmitHandler (evt) {
    evt.preventDefault(); 
    let nameInput = document.querySelector('.popup__input_name');
    let jobInput = document.querySelector('.popup__input_job');
  
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;

    closePopup();
}

const saveButton = document.querySelector('.popup__button-save');
    saveButton.addEventListener('click',formSubmitHandler );
