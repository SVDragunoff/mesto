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
const saveButton = document.querySelector('.popup__button-save');//кновка сохранения редактирования профиля
const profileName = document.querySelector('.profile__info-title');//имя
const profileJob = document.querySelector('.profile__info-subtitle');//род занятости
let nameInput = document.querySelector('.popup__inputs_name');//поле ввода имени
let jobInput = document.querySelector('.popup__inputs_job');//поле ввода профессии
const addImage = document.querySelector('.profile__add-button');//кнопка добавления фото
const addButton = document.querySelector('.popup-place');//попап место
const addClose = document.querySelector('.popup-place__button-close');//кнопка закрытия попап место
const popupUrl = document.querySelector('.popup-place__inputs_link');//ссылка на фото
const popupTitle = document.querySelector('.popup-place__inputs_name');//текс фото
const popupSave = document.querySelector('.popup-place');//кнопка сохранения фото

const elements = document.querySelector(".elements") //шаблон
const elementsTemplate = document.querySelector('.cardTemplate').content; //template
const popupImage = document.querySelector('.element__image');//поле расположения фото
const imagePopup = document.querySelector('.popup__image');//для функции добавления фото
const imagePopupSrc = document.querySelector('.popup__image_src');//для функции добавления фото_ссылка
const imagePopupText = document.querySelector('.popup__image_text');//для функции добавления фото_текст
const imgClose = document.querySelector('.popup__image_button-close');//кнопка закрытия фото

function addCard(item) {
    const element = elementsTemplate.cloneNode(true); //копируем заготовку
    const elementImage = element.querySelector(".element__image"); //поле image
    const elementTitle = element.querySelector(".element__title"); //поле title
    elementImage.src = item.link;//вставляем ссылку из массива фото
    elementImage.alt = item.name; //вставляем описание фото
    elementTitle.textContent = item.name; //вставляем текст из массива
    elements.prepend(element);
}

function render(){//функция перебора массива
    initialCards.forEach(addCard)
};

render();//вызов функции добавления скопированных елементов

function creatCards(e) {//функция создания новых фото
    e.preventDefault(); //отмена отправки формы
    const elementTemplate = document.querySelector(".cardTemplate").content; //находим заготовку
    const element = elementTemplate.cloneNode(true); //копируем заготовку

    const elementImage = element.querySelector(".element__image"); //поле image
    const elementTitle = element.querySelector(".element__title"); //поле title 

    elementImage.src = popupUrl.value; //вставляем ссылку из поля popup
    elementImage.alt = popupTitle.value
    elementTitle.textContent = popupTitle.value; //вставляем текст из поля popup

    elements.prepend(element);//помещаем фото в начало списка

    openCloseAdd();
}
  

function DelElement(ev) {//функция удаления елемента
let deleteButton = ev.target.closest('.element__delete');
  
if (deleteButton)  {
    deleteButton.closest('.element').remove()
}
}

function addLike(ev) {//функция добавления лайка
    let buttonLike = ev.target.closest('.element__heart');
    if (buttonLike) {
        buttonLike.classList.toggle('element__heart_on');
    }
  }

  function imageClick(event) {//открыть фото
    let popupImage = event.target.closest('.element__image');
    if (popupImage) {
        openCloseImg(imagePopup);
        imagePopupSrc.src = popupImage.src;
        imagePopupText.textContent = popupImage.alt;
            
    }
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
function openCloseImg () {//Открывает и закрывает попап "Фото"
    imagePopup.classList.toggle('popup_open');
    
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
//закрывает попап "Фото"
imgClose.addEventListener('click', openCloseImg);
//сохраняет новое фото
popupSave.addEventListener('submit', creatCards);
//ставит лайк
elements.addEventListener('click', addLike);
//удаляет элемент
elements.addEventListener('click', DelElement);
//открывает фото
elements.addEventListener('click', imageClick);


            /*Кладбище некорректно работующего кода,
            с которым стоит разобраться

function DelElem(event){//Удаляет элемент
const deleteElement = event.target.closest('.element__delete');
deleteElement.parentNode.remove();
}
const deleteButton = document.querySelectorAll('.element__delete');
function LikeElement(ev) {
ev.target.closest('.element__heart').classList.toggle('element__heart_on');
}  
buttonLike.forEach(function (ele) {
ele.addEventListener('click', LikeElement)
});
buttonLike.forEach(addEventListener('click', function (evt) {
evt.target.classList.toggle('element__heart_on');
}));
buttonLike.addEventListener('click', addLike);

function addLike (e) {
e.target.closest('.element__heart').classList.toggle('element__heart_on');
}*/