const editProfile = document.querySelector('.profile__info-button');
const closeProfile = document.querySelector('.popup__button-close');
const formElement = document.querySelector('.popup');
const saveButton = document.querySelector('.popup__button-save');
const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');
let nameInput = document.querySelector('.popup__inputs_name');
let jobInput = document.querySelector('.popup__inputs_job');
const addImage = document.querySelector('.profile__add-button');
const addButton = document.querySelector('.popup-place');
const addClose = document.querySelector('.popup-place__button-close');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const elements = document.querySelector(".elements")
const cardTemplate = document.querySelector('.cardTemplate').content;
const cardImage = document.querySelector('.element__image');
const cardTitle = document.querySelector('.element__title');

function addCard (name, link){
    const card = cardTemplate.cloneNode(true);
    //like
    //delete
card.querySelector(".element__image").src = link;
    
    cardImage.src = link;
    cardTitle.textContent = name;
    
}



//Открывает и закрывает попап редактирования профиля
function openClosePopup () {
    formElement.classList.toggle('popup_open');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

//функция присвоения введенных данных в окне "Попап" для соответствующего поля
function formSubmitHandler (evt) {
    evt.preventDefault();   
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    openClosePopup();
}
//Открывает и закрывает попап "Место"
function openCloseAdd () {
    addButton.classList.toggle('popup_open');
}


//кнопка "редактирование"
editProfile.addEventListener('click', openClosePopup);
//кнопка "крест"
closeProfile.addEventListener('click', openClosePopup);
//кновка "сохранить"
formElement.addEventListener('submit', formSubmitHandler);
//открывает и закрывает попоап "Место"
addImage.addEventListener('click', openCloseAdd);
addClose.addEventListener('click', openCloseAdd);
