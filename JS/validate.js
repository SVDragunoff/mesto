enableValidation({
    formSelector: '.popup__conteiner',
    inputSelector: '.popup__inputs',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
  });

function enableValidation(options){
    const formElement = Array.from(document.querySelectorAll(options.formSelector));
    formElement.forEach(formElement => {

    
    const inputElements = formElement.querySelectorAll(options.inputSelector);
    inputElements.forEach(input => {
       input.addEventListener('input', handleInput)
       })
       const popapButton = Array.from(formElement.querySelectorAll('.popup__button-save'));
       popapButton.forEach(popapButton =>{
       formElement.addEventListener('submit', evt => {
           evt.preventDefault()
       })
       formElement.addEventListener('input', () => {
           const isFormValid = formElement.checkValidity();
           popapButton.disabled = !isFormValid;
           popapButton.classList.toggle(
               options.inactiveButtonClass, !isFormValid
       )})
       })
   })
}
function handleInput(evt){
    const input = evt.target;
    const error = document.querySelector(`#${input.id}-error`);
    if (input.checkValidity()){
           error.textContent = '';
    }else{
    error.textContent = input.validationMessage;
    console.log(input.validationMessage);
    }
   }
  
  
  
   /* const inputElements = document.querySelector('.popup-place__conteiner');

   inputElements.querySelectorAll('.popup__inputs')
        .forEach(input =>{
                input.addEventListener('input', e =>{
                    const inputEl = e.target;
                    console.log(inputEl.checkValidity())
                })
        })
        function enableValidation(options){
            const formElement = document.querySelector('.popup-place__conteiner');
            const inputElements = formElement.querySelectorAll(options.inputSelector)
            inputElements.forEach(input => {
               input.addEventListener('input', handleInput)
                   
             })
           }*/