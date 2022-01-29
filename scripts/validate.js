const submitForm = (event) => {
    event.preventDefault;
}

const showError = (input, errorContainer, errorText, {inputErrorClass, errorClass}) => {
    input.classList.add(inputErrorClass);
    errorContainer.classList.add(errorClass);
    errorContainer.textContent = errorText;
    console.log(input.validationMessage)
}

const hideError = (input, errorContainer, {inputErrorClass, errorClass}) => {
    input.classList.remove(inputErrorClass);
    errorContainer.classList.remove(errorClass);
    errorContainer.textContent = '';
}

const toggleButton = (form, {submitButtonSelector, inactiveButtonClass}) => {
    const submit = form.querySelector(submitButtonSelector);
    const isFormValid = form.checkValidity();
    console.log(isFormValid);
    if (isFormValid) {
        submit.classList.remove(inactiveButtonClass);
        submit.removeAttribute('disabled')
    } else {
        submit.classList.add(inactiveButtonClass);
        submit.setAttribute('disabled', 'disabled');
    }
}

const validateInput = (form, input, {inputErrorClass, errorClass, submitButtonSelector, inactiveButtonClass}) => {
    console.log(input.validity.valid);
    const errorContainer = form.querySelector(`#${input.id}-error`);
    let errorText = input.validationMessage;
    console.log(errorContainer);
    if (input.validity.valid) {
        hideError(input, errorContainer, {inputErrorClass, errorClass});
      } else {
        showError(input, errorContainer, errorText, {inputErrorClass, errorClass});
      }
    toggleButton(form, {submitButtonSelector, inactiveButtonClass})
}

const enableValidation = ({formSelector,
                           inputSelector,
                           submitButtonSelector,
                           inactiveButtonClass,
                           ...rest}) => {
    const forms = Array.from(document.querySelectorAll(formSelector));
    forms.forEach((form) => {
        toggleButton(form, {submitButtonSelector, inactiveButtonClass});
        const submitFormHandler = (event) => {
            submitForm(event);
        }
        form.addEventListener("submit", submitFormHandler);
        const inputs = form.querySelectorAll(inputSelector);
        inputs.forEach((input) => {
            const validateInputHandler = () => {
                validateInput(form, input, {submitButtonSelector, inactiveButtonClass}, rest);
            }
            input.addEventListener("input", validateInputHandler);
        })
    })
    
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__text_error',
    errorClass: 'popup__error_visible'
  }); 