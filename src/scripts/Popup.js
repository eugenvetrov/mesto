export default class Popup {
    constructor(selector) {
        this._element = document.querySelector(selector);
    }
    
    _handleEscClose(event) {
        if(event.key === 'Escape'){
            this.close();
        }
    }

    setEventListeners() {
        
        this._element.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup_opened')) {
                this.close();
            }
            if (evt.target.classList.contains('popup__close-icon')) {
                this.close();
            }
        })
    }

    open() {
        this._element.classList.add("popup_opened");
        document.addEventListener("keydown", this._handleEscClose.bind(this));
    }

    close() {
        document.removeEventListener("keydown", this._handleEscClose.bind(this)); 
        this._element.classList.remove("popup_opened");
    }
}