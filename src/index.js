import Card from '../JS/Card.js';
import FormValidator from '../JS/FormValidator.js';
import { closeButtonCross } from '../JS/utils.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import Section from '../JS/Section.js';
import indexCss from '../pages/index.css'




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
//Массив для класса FormValidator
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

//функция присвоения введенных данных в окне "Попап" для соответствующего поля
const formSubmitHandler = (evt) => {
    evt.preventDefault();
    userInfo.setUserInfo(nameInput.value, jobInput.value)
    popup.closePopup();
}


const popup = new PopupWithForm(formElement, formSubmitHandler)
popup.setEventListeners()


const userInfo = new UserInfo(profileName, profileJob)


//Открывает и закрывает попап редактирования профиля
function openProfile() {
    popup.openPopup();
    let info = userInfo.getUserInfo();
    nameInput.value = info.name;
    jobInput.value = info.job;
    editProfileValid.clearErrors()
}


//Открывает попап "Место"
function openAdd() {
    const popup = new PopupWithForm(addPlace, undefined)
    popup.openPopup();
    popupUrl.value = '';
    popupTitle.value = '';
    placeFormValid.clearErrors()

}

//создает карточку
function creatCard(e) {//функция создания новых фото
    e.preventDefault(); //отмена отправки формы
    const popup = new PopupWithForm(addPlace, undefined)
    elements.prepend(new Card(popupUrl.value, popupTitle.value, '.cardTemplate').creatElement());//помещаем фото в начало списка
    popup.closePopup();
}

//кнопка "редактирование"
editProfile.addEventListener('click', openProfile);
//открывает и закрывает попоап "Место"
addImage.addEventListener('click', openAdd);
//кнопка "крест" place
addClose.addEventListener('click', closeButtonCross);
//сохраняет новое фото
addPlace.addEventListener('submit', creatCard);
//кновка "крест" закрывает изображение
imgClose.addEventListener('click', closeButtonCross);




