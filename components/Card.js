import { PopupWithImage } from './PopupWithImage.js';
export default class Card {
    constructor(link, name, cardSelector, handleCardClick ) {
        this._link = link;
        this._name = name;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
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
        elementImage.addEventListener('click', () => this._handleCardClick());
        return this._element;
    }

    //корзина
    _delElement() {
        this._element.remove();
        this._element = null;

    }
    //лайк
    _addLike() {
        this._element.querySelector('.element__heart').classList.toggle('element__heart_on');

    }
    //открывает фото
    // _openPhoto() {
    //     const popup = new PopupWithImage()
    //     popup.openPopup(this._link, this._name);
    // }

}
