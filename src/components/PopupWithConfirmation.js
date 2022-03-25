import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ selector, handleFormSubmit }) {
    super(selector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._element.querySelector(".popup__form");
  }

  open(arg, item) {
    super.open();
    this._arg = arg;
    this._item = item;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._arg, this._item);
    });
  }
}
