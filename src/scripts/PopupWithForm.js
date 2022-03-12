export default class PopupWithForm extends Popup {
    constructor(selector, submit) {
        this._selector = selector;
        this._handleFormSubmit = submit;
    }

    _getInputValues() {
        this._inputList = this._element.querySelectorAll('.form__input');
    
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        
        return this._formValues;
    }

    setEventListeners() {

    }

    close() {

    }
}