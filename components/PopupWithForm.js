import Popup from './Popup.js'

export class PopupWithForm extends Popup {

    constructor(popupSelector, callBack) {
        super(popupSelector)
        this._callBack = callBack;
    }

    _getInputValues() {

    }


    setEventListeners() {
        super.setEventListeners();
    }

    closePopup(elem) {//закрывает попап
        super.closePopup();

    }
}