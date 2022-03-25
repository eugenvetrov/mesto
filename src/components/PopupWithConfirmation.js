import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
    constructor({ selector, handleFormSubmit }) {
        super(selector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this._element.querySelector('.popup__form');
    }

    open(card, item){
        super.open();
        console.log(card);
        this._card = card;
        this._item = item;
        console.log(this._card);
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._card, this._item);
        });
    }

}