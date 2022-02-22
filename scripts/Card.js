export default class Card {
    constructor(element, cardSelector, handleCardClick){
        this._name = element.name;
        this._link = element.link;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
    }

    _makeCloneTemplateForCard() {
        this._cardTemplate = document.querySelector(this._cardSelector).content.cloneNode(true);
        return this._cardTemplate;
    }

    _makeCard() {
        this._element = this._makeCloneTemplateForCard();
        this._cardImage = this._element.querySelector('.group__image');
        this._cardImage.src = this._link;
        this._cardName = this._element.querySelector('.group__name')
        this._cardName.textContent = this._name;
        this._cardImage.alt = this._name;
    }

    getCard(){
        this._makeCard();
        this._setEventListeners();
        
        return this._element;
    }

    _setEventListeners() {
        this._likeIcon = this._element.querySelector(".group__like-icon");
        this._trashIcon = this._element.querySelector(".group__delete-icon");
        
        const handleLikeIcon = (event) => {
            const like = event.target;
            like.classList.toggle("group__like-icon_active");
        }
        
        const handleTrashIcon = (event) => {
            const cardForDelete = event.target.closest(".group__rectangle");
            cardForDelete.remove();
        }
        
        this._likeIcon.addEventListener("click", handleLikeIcon);
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._name, this._link)
          });
        this._trashIcon.addEventListener("click", handleTrashIcon);
    }
}