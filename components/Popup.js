export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);
        this.closePopup = this.closePopup.bind(this);
        this._closeButton = this._popupSelector.querySelector('.popup__button-close');
    }

    openPopup() {//открывает попап 
        this._popupSelector.classList.add('popup_open');
        document.addEventListener('keydown', this._handleEscClose);
        this._popupSelector.addEventListener('click', () => {
            if (event.target.classList.contains('popup')) { // "клик на оверлей" создает слушатель
                this.closePopup();
            }
        });
        
        
    }

    closePopup() {//закрывает попап
        this._popupSelector.classList.remove('popup_open');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupSelector.removeEventListener('click', () => {if (event.target.classList.contains('popup')) { // "клик на оверлей" удаляет слушатель
            this.closePopup();
        }});
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', this.closePopup, {once: true})
    }
    
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
    }
    }
   
}
