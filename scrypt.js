let editProfile = document.querySelector('.profile__info-button');
let closeProfile = document.querySelector('.popup__button-close')

function openProfile () {
    document.querySelector('.popup').style.display = "flex";
}
function closePr () {
    document.querySelector('.popup').style.display = "none";
}
editProfile.addEventListener('click', openProfile);
closeProfile.addEventListener('click', closePr);


// Находим форму в DOM
let formElement = document.querySelector('.popup');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
                                                
    // Находим поля формы в DOM
    let nameInput = document.querySelector('.popup__inputs');
    let jobInput = document.querySelector('.popup__button-title');
    // Получите значение полей из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей
    
    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
