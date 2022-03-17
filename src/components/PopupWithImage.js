import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._popupFullImage = document.querySelector('.popup__fullscreen-image');
        this._popupFullImageCaption = document.querySelector('.popup__fullscreen-caption');
    }
    open(data) {
        this._popupFullImage.src = data.link;
        this._popupFullImageCaption.textContent = data.name;
        this._popupFullImage.alt = data.name;
        super.open();
    }
}