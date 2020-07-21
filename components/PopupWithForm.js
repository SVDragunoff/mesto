import Popup from './Popup.js'

export class PopupWithForm extends Popup {

    constructor(popupSelector, callBack) {
        super(popupSelector)
        this._popupForm = document.querySelector('.popup');
        this._callBack = callBack;
    }

    _getInputValues() {

    }

    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', this._callBack);
    }

    closePopup(elem) {//закрывает попап
        super.closePopup();
    
    }
}