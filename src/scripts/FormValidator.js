export default class FormValidator {
    constructor(form, data){
        this._formSelector = data.formSelector;
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._form = form;
    }

   _showError(input, errorText) {
        const errorContainer = this._form.querySelector(`#${input.id}-error`);
        input.classList.add(this._inputErrorClass);
        errorContainer.classList.add(this._errorClass);
        errorContainer.textContent = errorText;
    }
    
    _hideError(input) {
        const errorContainer = this._form.querySelector(`#${input.id}-error`)
        input.classList.remove(this._inputErrorClass);
        errorContainer.classList.remove(this._errorClass);
        errorContainer.textContent = '';
    }

    _enableSubmit() {
        this._submitButton.classList.remove(this._inactiveButtonClass);
        this._submitButton.removeAttribute('disabled');
    }

    _disableSubmit(){
        this._submitButton.classList.add(this._inactiveButtonClass);
        this._submitButton.setAttribute('disabled', 'disabled');
    }

    _toggleButton = () => {
        const isFormValid = this._form.checkValidity();
        if (isFormValid) {
            this._enableSubmit();
        } else {
            this._disableSubmit();
        }
    }
    
    enableValidation() {
        this._submitButton = this._form.querySelector(this._submitButtonSelector);
        this._toggleButton();
        const submitFormHandler = (event) => {
            event.preventDefault;
            this._disableSubmit();
        }
        this._form.addEventListener("submit", submitFormHandler);
        this._inputs = this._form.querySelectorAll(this._inputSelector);
        this._inputs.forEach(input => {
            const validateInputHandler = () => {
                const isFormValid = input.validity.valid;
                if (isFormValid) {
                    this._hideError(input);
                  } else {
                    const errorText = input.validationMessage;
                    this._showError(input, errorText);
                  }
                this._toggleButton();
            }
            input.addEventListener("input", validateInputHandler);
        });
    }

    resetValidation() {
        this._toggleButton();
        this._inputs.forEach(input => {
            this._hideError(input)
        })
    }
}