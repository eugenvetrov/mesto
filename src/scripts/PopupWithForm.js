import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
    constructor({ selector, handleFormSubmit }) {
        super(selector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._element.querySelector('.popup__form');
    }

    _getInputValues() {
        this._inputList = Array.from(this._element.querySelectorAll('.popup__text'));
        this._formValues = {};
        this._inputList.forEach(input => this._formValues[input.name] = input.value);
        console.log(this._formValues);
        return this._formValues;
    }

    close() {
        super.close();
        this._form.reset();
    }

    setEventListeners() {
        super.setEventListeners();
        this._getInputValues();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
        });
    }
}