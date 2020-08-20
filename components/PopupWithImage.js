import Popup from './Popup.js'

export class PopupWithImage extends Popup {

    constructor() {
        const imagePopup = document.querySelector('.popup-image');
        super(imagePopup);
        this.imagePopupSrc = document.querySelector('.popup-image__src');
        this.imagePopupText = document.querySelector('.popup-image__text');

    }

    openPopup(link, name) {
            
        super.openPopup();
        this.imagePopupSrc.src = link;
        this.imagePopupText.alt = name;
        this.imagePopupText.textContent = name;  
    }

}
