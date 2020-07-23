import { openPopup } from '../utils/utils.js';
import Popup from '../components/Popup.js';
import PopupWithImage from '../components/PopupWithImage.js';

//import Popup from './Popup.js';
export default class Card {
    constructor(link, name, cardSelector) {
        this._link = link;
        this._name = name;
        this._cardSelector = cardSelector;
    }
    //копирует Template елемент
    _getTemplate() {
        const cardElement = document.querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }
    //добавляет карточки из массива и вешает слушатели
    creatElement() {
        this._element = this._getTemplate(); //копируем заготовку
        const elementImage = this._element.querySelector(".element__image"); //поле image
        const elementTitle = this._element.querySelector(".element__title");
        const elementDelete = this._element.querySelector('.element__delete');
        const elementLike = this._element.querySelector('.element__heart');
        elementImage.src = this._link;//вставляем ссылку из массива фото
        elementImage.alt = this._name; //вставляем описание фото
        elementTitle.textContent = this._name; //вставляем текст из массива
        elementLike.addEventListener('click', () => this._addLike());
        elementDelete.addEventListener('click', () => this._delElement());
        this._element.querySelector('.element__image').addEventListener('click', () => this._openPhoto());
        return this._element;
    }

    //корзина
    _delElement() {
        this._element.remove();

    }
    //лайк
    _addLike() {
        this._element.querySelector('.element__heart').classList.toggle('element__heart_on');

    }
    //открывает фото
    _openPhoto() {
        const popup = new PopupWithImage(this._link, this._name)
        popup.openPopup();
        }



}
/*const popupSelector = new Popup(formElement)
popupSelector.openPopup()*/