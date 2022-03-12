export default class Popup {
    constructor(selector) {
        this._container = document.querySelector(selector);
    }
    
    _handleEscClose(event) {
        if(event.key === 'Escape'){
            this.close;
        }
    }

    setEventListeners() {
        this._container.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close.bind(this);
            }
            if (evt.target.classList.contains('popup__close-icon')) {
                this.close.bind(this);
            }
        })
    }

    open() {
        this._container.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose.bind(this)); 
    }

    close() {
        document.removeEventListener("keydown", this._handleEscClose.bind(this)); 
        this._container.classList.remove("popup_opened");
    }
}