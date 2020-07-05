import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
const initialCards = [//массив с фото и наименованием
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
//Массив для класса FormValidator
const optionsValidation = {
    errorClass: '.error',
    inputSelector: '.popup__inputs',
    submitButtonSelector: '.popup__button-save',
    popupButtonSaveInactive: 'popup__button_disabled',
    formSelector: '.popup__container',
};
const editProfile = document.querySelector('.profile__info-button');//кнопка редактирования профиля
const closeProfile = document.querySelector('.popup__button-close');//кнопка закрытия окна редактирования профиля
const formElement = document.querySelector('.popup');//попап
const profileName = document.querySelector('.profile__info-title');//имя
const profileJob = document.querySelector('.profile__info-subtitle');//род занятости
const nameInput = document.querySelector('.popup__inputs_name');//поле ввода имени
const jobInput = document.querySelector('.popup__inputs_job');//поле ввода профессии
const addImage = document.querySelector('.profile__add-button');//кнопка добавления фото
const addPlaceButton = document.querySelector('.popup-place');//попап место
const addClose = document.querySelector('.popup-place__button-close');//кнопка закрытия попап место
const popupUrl = document.querySelector('.popup-place__inputs_link');//ссылка на фото
const popupTitle = document.querySelector('.popup-place__inputs_name');//текс фото
const elements = document.querySelector(".elements") //шаблон

const imgClose = document.querySelector('.popup-image__button-close');//кнопка закрытия фото

const editProfileValid = new FormValidator(formElement, optionsValidation);
const placeFormValid = new FormValidator(addPlaceButton, optionsValidation);
editProfileValid.enableValidation();
placeFormValid.enableValidation();

initialCards.forEach((element) => {
    const card = new Card(element.link, element.name, '.cardTemplate');
    const cardElement = card.addCard();
    elements.prepend(cardElement);
})


export function openPopup(elem) {//открывает попап
    elem.addEventListener('click', mouseClick);
    document.addEventListener('keydown', closePopupButtonEsc);
    elem.classList.add('popup_open');
    //editProfileValid.clearErrors()
    
}

function closePopup(elem) {//закрывает попап
    elem.classList.remove('popup_open');
    document.removeEventListener('keydown', closePopupButtonEsc);
    elem.removeEventListener('click', mouseClick);
    
    
}

function closeButtonCross(evt) {//кнопка "крест" в попапах редактирования профиля и место
    if (evt.target.classList.contains('popup__button-close')) {
        document.querySelector('.popup_open').classList.remove('popup_open');
    }
}

//Открывает и закрывает попап редактирования профиля
function openProfile() {
    openPopup(formElement);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}
//функция присвоения введенных данных в окне "Попап" для соответствующего поля
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(formElement);
}
//Открывает попап "Место"
function openAdd() {
    openPopup(addPlaceButton);
    popupUrl.value = '';
    popupTitle.value = '';
    editProfileValid.clearErrors()
    
}
function creatCards(e) {//функция создания новых фото
    e.preventDefault(); //отмена отправки формы
    elements.prepend(new Card(popupUrl.value, popupTitle.value, '.cardTemplate').addCard());//помещаем фото в начало списка
    closePopup(addPlaceButton);
}
//Закрывает попап кнопкой Esc
function closePopupButtonEsc(evt) {
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_open'))
    }
}

function mouseClick(evt) { // клик на оверлей 
    closePopup(evt.target)
}

//кнопка "редактирование"
editProfile.addEventListener('click', openProfile);
//кнопка "крест" editProfile
closeProfile.addEventListener('click', closeButtonCross);
//кнопка "сохранить"
formElement.addEventListener('submit', formSubmitHandler);
//открывает и закрывает попоап "Место"
addImage.addEventListener('click', openAdd);
//кнопка "крест" place
addClose.addEventListener('click', closeButtonCross);
//сохраняет новое фото
addPlaceButton.addEventListener('submit', creatCards);
//кновка "крест" закрывает изображение
imgClose.addEventListener('click', closeButtonCross);




