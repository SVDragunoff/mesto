import Card from './Card.js';
import { FormValidator } from './FormValidator.js';
import { openPopup, closePopup, closeButtonCross } from './utils.js';
import { initialCards } from './cardsArray.js';
//Массив для класса FormValidator

const editProfile = document.querySelector('.profile__info-button');//кнопка редактирования профиля
const closeProfile = document.querySelector('.popup__button-close');//кнопка закрытия окна редактирования профиля
const formElement = document.querySelector('.popup');//попап
const profileName = document.querySelector('.profile__info-title');//имя
const profileJob = document.querySelector('.profile__info-subtitle');//род занятости
const nameInput = document.querySelector('.popup__inputs_name');//поле ввода имени
const jobInput = document.querySelector('.popup__inputs_job');//поле ввода профессии
const addImage = document.querySelector('.profile__add-button');//кнопка добавления фото
const addPlace = document.querySelector('.popup-place');//попап место
const addClose = document.querySelector('.popup-place__button-close');//кнопка закрытия попап место
const popupUrl = document.querySelector('.popup-place__inputs_link');//ссылка на фото
const popupTitle = document.querySelector('.popup-place__inputs_name');//текс фото
const elements = document.querySelector(".elements") //шаблон
const imgClose = document.querySelector('.popup-image__button-close');//кнопка закрытия фото
const formEditProfile = document.querySelector('.popup__container');
const formPlace = document.querySelector('.popup-place__container');

const optionsValidation = {
    errorClass: '.error',
    inputSelector: '.popup__inputs',
    submitButtonSelector: '.popup__button-save',
    popupButtonSaveInactive: 'popup__button_disabled',
    formSelector: '.popup__container',
};
const editProfileValid = new FormValidator(formEditProfile, optionsValidation);
const placeFormValid = new FormValidator(formPlace, optionsValidation);
editProfileValid.enableValidation();
placeFormValid.enableValidation();

initialCards.forEach((element) => {
    const card = new Card(element.link, element.name, '.cardTemplate');
    const cardElement = card.creatElement();
    elements.prepend(cardElement);
})

//Открывает и закрывает попап редактирования профиля
function openProfile() {
    openPopup(formElement);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    editProfileValid.clearErrors()
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
    openPopup(addPlace);
    popupUrl.value = '';
    popupTitle.value = '';
    placeFormValid.clearErrors()

}
//создает карточку
function creatCard(e) {//функция создания новых фото
    e.preventDefault(); //отмена отправки формы
    elements.prepend(new Card(popupUrl.value, popupTitle.value, '.cardTemplate').creatElement());//помещаем фото в начало списка
    closePopup(addPlace);
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
addPlace.addEventListener('submit', creatCard);
//кновка "крест" закрывает изображение
imgClose.addEventListener('click', closeButtonCross);




