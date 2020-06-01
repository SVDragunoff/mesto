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
const popupUrl = document.querySelector('.popup-place__inputs_link');
const popupTitle = document.querySelector('.popup-place__inputs_name');
const popupSave = document.querySelector('.popup-place');

const elements = document.querySelector(".elements") //находим элемент, содержащий шаблон
const elementsTemplate = document.querySelector('.cardTemplate').content; //находим шаблон template
const popupImage = document.querySelector('.element__image');




function addCard(item) {
    const element = elementsTemplate.cloneNode(true); //копируем заготовку
    const elementImage = element.querySelector(".element__image"); //находим поле image
    const elementTitle = element.querySelector(".element__title"); //находим поле title
    elementImage.src = item.link; //вставляем ссылку из массива
    elementTitle.textContent = item.name; //вставляем текст из массива
    elements.prepend(element);
}

function render(){//функция перебора массива
    initialCards.forEach(addCard)
};

render();//вызов функции добавления скопированных елементов

function creatCards(e) {
    e.preventDefault(); //отмена стандартного submit
    const elementTemplate = document.querySelector(".cardTemplate").content; //находим заготовку
    const element = elementTemplate.cloneNode(true); //копируем заготовку

    const elementImage = element.querySelector(".element__image"); //находим поле image
    const elementTitle = element.querySelector(".element__title"); //находим поле title 

    elementImage.src = popupUrl.value; //вставляем ссылку из поле popup
    elementTitle.textContent = popupTitle.value; //вставляем текст из поле popup

    elements.prepend(element);

    openCloseAdd();
}
  

//function DelElem(event){//Удаляет элемент
 //   const deleteElement = event.target.closest('.element__delete');
  //  deleteElement.parentNode.remove();
//}
//const deleteButton = document.querySelectorAll('.element__delete');


function DelElement(ev) {
  let deleteButton = ev.target.closest('.element__delete');
  
if (deleteButton)  {
    deleteButton.closest('.element').remove()
}
}
//buttonLike.addEventListener('click', addLike);

//function addLike (e) {
//   e.target.closest('.element__heart').classList.toggle('element__heart_on');
//}
function addLike(ev) {
    let buttonLike = ev.target.closest('.element__heart');
    if (buttonLike) {
        buttonLike.classList.toggle('element__heart_on');
    }
  }



/*function LikeElement(ev) {
    ev.target.closest('.element__heart').classList.toggle('element__heart_on');
  }  
  buttonLike.forEach(function (ele) {
    ele.addEventListener('click', LikeElement)
});*/
//buttonLike.forEach(addEventListener('click', function (evt) {
 // evt.target.classList.toggle('element__heart_on');
//}));


  
  
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

popupSave.addEventListener('submit', creatCards);
elements.addEventListener('click', addLike);
elements.addEventListener('click', DelElement);