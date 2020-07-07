export function openPopup(elem) {//открывает попап 
    elem.addEventListener('click', mouseClickOverlay);
    document.addEventListener('keydown', closePopupButtonEsc);
    elem.classList.add('popup_open');
}
export function closePopup(elem) {//закрывает попап
    elem.classList.remove('popup_open');
    document.removeEventListener('keydown', closePopupButtonEsc);
    elem.removeEventListener('click', mouseClickOverlay);
}
export function closePopupButtonEsc(evt) {//Закрывает попап кнопкой Esc
    if (evt.key === 'Escape') {
        closePopup(document.querySelector('.popup_open'))

    }
}
export function mouseClickOverlay(evt) {
    if (event.target.classList.contains('popup')) { // клик на оверлей 
        closePopup(evt.target)
    }
}
export function closeButtonCross() {//кнопка "крест" в попапах редактирования профиля и место
    document.querySelector('.popup_open').classList.remove('popup_open');
}


