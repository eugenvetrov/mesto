import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popupFullImage = this._element.querySelector(
      ".popup__fullscreen-image"
    );
    this._popupFullImageCaption = this._element.querySelector(
      ".popup__fullscreen-caption"
    );
  }
  open(data) {
    this._popupFullImage.src = data.link;
    this._popupFullImageCaption.textContent = data.name;
    this._popupFullImage.alt = data.name;
    super.open();
  }
}
