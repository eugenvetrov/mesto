const submitForm = (event) => {
    event.preventDefault;
}

const showError = (input, errorContainer, errorText, {inputErrorClass, errorClass}) => {
    input.classList.add(inputErrorClass);
    errorContainer.classList.add(errorClass);
    errorContainer.textContent = errorText;
}

const hideError = (input, errorContainer, {inputErrorClass, errorClass}) => {
    input.classList.remove(inputErrorClass);
    errorContainer.classList.remove(errorClass);
    errorContainer.textContent = '';
}

const disableSubmit = (submitButton, inactiveButtonClass) => {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.setAttribute('disabled', 'disabled');
}

const enableSubmit = (submitButton, inactiveButtonClass) => {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.removeAttribute('disabled')
}

const toggleButton = (form, {submitButtonSelector, inactiveButtonClass}) => {
    const submit = form.querySelector(submitButtonSelector);
    const isFormValid = form.checkValidity();
    if (isFormValid) {
        enableSubmit(submit, inactiveButtonClass);
    } else {
        disableSubmit(submit, inactiveButtonClass);
    }
}

const validateInput = (form, input, {submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
    const errorContainer = form.querySelector(`#${input.id}-error`);
    const isFormValid = input.validity.valid;
    if (isFormValid) {
        hideError(input, errorContainer, {inputErrorClass, errorClass});
      } else {
        let errorText = input.validationMessage;
        showError(input, errorContainer, errorText, {inputErrorClass, errorClass});
      }
    toggleButton(form, {submitButtonSelector, inactiveButtonClass})
}

const enableValidation = ({formSelector,
                           inputSelector,
                           submitButtonSelector,
                           inactiveButtonClass,
                           inputErrorClass,
                           errorClass}) => {
    const forms = Array.from(document.querySelectorAll(formSelector));
    forms.forEach((form) => {
        toggleButton(form, {submitButtonSelector, inactiveButtonClass});
        const submit = form.querySelector(submitButtonSelector);
        const submitFormHandler = (event) => {
            submitForm(event);
            disableSubmit(submit, inactiveButtonClass);
        }
        form.addEventListener("submit", submitFormHandler);
        const inputs = form.querySelectorAll(inputSelector);
        inputs.forEach((input) => {
            const validateInputHandler = () => {
                validateInput(form,
                              input,
                              {submitButtonSelector,
                               inactiveButtonClass,
                               inputErrorClass,
                               errorClass});
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