import Popup from './Popup.js'

export class PopupWithImage extends Popup {

    constructor() {
        const imagePopup = document.querySelector('.popup-image');
        super(imagePopup);
        this.imagePopupSrc = document.querySelector('.popup-image__src');
        this.imagePopupText = document.querySelector('.popup-image__text');

    }

    openPopup(src, name) {
        this.imagePopupSrc.src = src;
        this.imagePopupText.textContent = name;
        
        super.openPopup();
    }

}
