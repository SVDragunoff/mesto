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
const elementsTemplate = document.querySelector('.cardTemplate').content; //template
const imagePopup = document.querySelector('.popup-image');//для функции добавления фото
const imagePopupSrc = document.querySelector('.popup-image__src');//для функции добавления фото_ссылка
const imagePopupText = document.querySelector('.popup-image__text');//для функции добавления фото_текст
const imgClose = document.querySelector('.popup-image__button-close');//кнопка закрытия фото


function addCard(link, name) {
    const element = elementsTemplate.cloneNode(true); //копируем заготовку
    const elementImage = element.querySelector(".element__image"); //поле image
    const elementTitle = element.querySelector(".element__title"); //поле title
    elementImage.src = link;//вставляем ссылку из массива фото
    elementImage.alt = name; //вставляем описание фото
    elementTitle.textContent = name; //вставляем текст из массива
    element.querySelector('.element__heart').addEventListener('click', addLike);
    element.querySelector('.element__delete').addEventListener('click', delElement);
    elements.addEventListener('click', openPhoto);
    return element;
}

//функция перебора массива
function render(initialCards, arrayElement) {
    initialCards.forEach((element) => {
        arrayElement.prepend(addCard(element.link, element.name));
    });
}

render(initialCards, elements);//вызов функции добавления скопированных елементов

function openPopup(elem) {//открывает попап
    elem.classList.add('popup_open');
    imagePopup.addEventListener('click', mouseClick);
    document.addEventListener('keydown', closePopupButtonEsc);
}

function closePopup(elem) {//закрывает попап
    elem.classList.remove('popup_open')
    document.removeEventListener('keydown', closePopupButtonEsc);
    imagePopup.removeEventListener('click', mouseClick);
}

function closeButtonCross(evt) {//кнопка "крест" в попапах редактирования профиля и место
    if (evt.target.classList.contains('popup__button-close')) {
        document.querySelector('.popup_open').classList.remove('popup_open');
    }
}

function delElement(ev) {//функция удаления елемента
    ev.target.closest('.element').remove();
}

function addLike(ev) {//функция добавления лайка
    ev.target.classList.toggle('element__heart_on');
}

function openPhoto(event) {//открыть фото
    const popupImage = event.target.closest('.element__image');
    
    if (popupImage) {
        openPopup(imagePopup);
        imagePopupSrc.src = popupImage.src;
        imagePopupText.textContent = popupImage.alt;
        imgClose.addEventListener('click', closeButtonCross);
        document.addEventListener('keydown', closePopupButtonEsc);
    }
}

//Открывает и закрывает попап редактирования профиля
function openProfile() {
    openPopup(formElement);
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    document.addEventListener('keydown', closePopupButtonEsc);
    formElement.addEventListener('click', mouseClick);
}

//функция присвоения введенных данных в окне "Попап" для соответствующего поля
function formSubmitHandler(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    closePopup(formElement);
}
//Открывает и закрывает попап "Место"
function openAdd() {
    openPopup(addPlaceButton);
    popupUrl.value = '';
    popupTitle.value = '';
    addPlaceButton.addEventListener('click', mouseClick);
    enableValidation();
}

function creatCards(e) {//функция создания новых фото
    e.preventDefault(); //отмена отправки формы
    elements.prepend(addCard(popupUrl.value, popupTitle.value));//помещаем фото в начало списка
    closePopup(addPlaceButton);
}

//Закрывает попап кнопкой Esc
function closePopupButtonEsc(evt) {
    if (evt.key === 'Escape') {
        document.querySelector('.popup_open').classList.remove('popup_open');
        closePopup(evt.target)
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




