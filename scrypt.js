const editProfile = document.querySelector('.profile__info-button');
const closeProfile = document.querySelector('.popup__button-close');

function openPopup () {
    document.querySelector('.popup').style.display = "flex";
}
function closePopup () {
    document.querySelector('.popup').style.display = "none";
}
editProfile.addEventListener('click', openPopup);
closeProfile.addEventListener('click', closePopup);

const profileName = document.querySelector('.profile__info-title');
const profileJob = document.querySelector('.profile__info-subtitle');


// Находим форму в DOM
let formElement = document.querySelector('.popup');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.
                                                
    // Находим поля формы в DOM
    let nameInput = document.querySelector('.popup__input_name');
    let jobInput = document.querySelector('.popup__input_job');
    // Получите значение полей из свойства value
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    
    // Вставьте новые значения с помощью textContent
    closePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
//formElement.addEventListener('submit', formSubmitHandler);
const saveButton = document.querySelector('.popup__button-save');
    saveButton.addEventListener('click',formSubmitHandler );
