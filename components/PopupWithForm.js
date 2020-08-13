import Popup from './Popup.js'

export class PopupWithForm extends Popup {

    constructor(popupSelector, callBack) {
        super(popupSelector)
        this._popupForm = document.querySelector('.popup');
        this._callBack = callBack;
    }

    // _getInputValues() {
    //     this._popupInputs = this._popup.querySelectorAll('.popup__inputs'); 
    //     this._formValues = {};
    //     this._popupInputs.forEach(input => this._formValues[input.name] = input.value);
    //     return this._formValues;
    // }
    // _handleFormSubmit() {
    //     this._getInputValues();
    //     this._callback(this._getInputValues());
    //     }
        
    setEventListeners() {
        super.setEventListeners();
        this._popupForm.addEventListener('submit', this._callBack);
    }

    closePopup(elem) {//закрывает попап
        super.closePopup();
    
    }
}