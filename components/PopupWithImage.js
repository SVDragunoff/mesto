import Popup from './Popup.js'

export class PopupWithImage extends Popup {

constructor(src, name) {
const imagePopup = document.querySelector('.popup-image');
super(imagePopup);

this._src = src;
this._name = name;

}

openPopup() {
const imagePopupSrc = document.querySelector('.popup-image__src');
const imagePopupText = document.querySelector('.popup-image__text');

imagePopupSrc.src = this._src;
imagePopupText.textContent = this._name;

super.openPopup();
}

}
