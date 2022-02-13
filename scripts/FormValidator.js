export default class FormValidator {
    constructor(data, form){
        this.formSelector = data.formSelector;
        this.inputSelector = data.inputSelector;
        this.submitButtonSelector = data.submitButtonSelector;
        this.inactiveButtonClass = data.inactiveButtonClass;
        this.inputErrorClass = data.inputErrorClass;
        this.errorClass = data.errorClass;
        this.form = form;
    }

   _showError(input, errorContainer, errorText) {
        input.classList.add(this.inputErrorClass);
        errorContainer.classList.add(this.errorClass);
        errorContainer.textContent = errorText;
    }
    
    _hideError(input, errorContainer) {
        input.classList.remove(this.inputErrorClass);
        errorContainer.classList.remove(this.errorClass);
        errorContainer.textContent = '';
    }

    _enableSubmit() {
        this.submit.classList.remove(this.inactiveButtonClass);
        this.submit.removeAttribute('disabled');
    }

    _disableSubmit(){
        this.submit.classList.add(this.inactiveButtonClass);
        this.submit.setAttribute('disabled', 'disabled');
    }

    _toggleButton = () => {
        const isFormValid = this.form.checkValidity();
        if (isFormValid) {
            this._enableSubmit();
        } else {
            this._disableSubmit();
        }
    }
    
    enableValidation() {
        this.submit = this.form.querySelector(this.submitButtonSelector);
        this._toggleButton();
        const submitFormHandler = (event) => {
            event.preventDefault;
            this._disableSubmit();
        }
        this.form.addEventListener("submit", submitFormHandler);
        this.inputs = this.form.querySelectorAll(this.inputSelector);
        this.inputs.forEach(input => {
            const validateInputHandler = () => {
                const errorContainer = this.form.querySelector(`#${input.id}-error`);
                const isFormValid = input.validity.valid;
                if (isFormValid) {
                    this._hideError(input, errorContainer);
                  } else {
                    const errorText = input.validationMessage;
                    this._showError(input, errorContainer, errorText);
                  }
                this._toggleButton();
            }
            input.addEventListener("input", validateInputHandler);
        });
    }
}