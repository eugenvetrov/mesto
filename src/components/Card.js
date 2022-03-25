export default class Card {
    constructor(element, cardSelector, userId, {handleCardClick, handleTrashIcon}){
        this._card = element;
        this._name = element.name;
        this._link = element.link;
        this._likes = element.likes;
        this._cardOwnerId = element.owner._id;
        this._myId = userId;
        this._cardSelector = cardSelector;
        this._handleCardClick = handleCardClick;
        this._handleTrashIcon = handleTrashIcon;
        this._isOwner = (this._cardOwnerId == this._myId);
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
        this._likeCount = this._element.querySelector(".group__like-number");
        this._likeCount.textContent = this._likes.length;
    }

    _handleLikeIcon(event) {
        const like = event.target;
        like.classList.toggle("group__like-icon_active");
    } 

    _setEventListeners() {

        this._likeIcon = this._element.querySelector(".group__like-icon");
        this._trashIcon = this._element.querySelector(".group__delete-icon");
        if (!this._isOwner) this._trashIcon.classList.add("group__delete-icon_disable");
            
        this._likeIcon.addEventListener("click", this._handleLikeIcon);
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick({name: this._name, link: this._link})
          });
        this._trashIcon.addEventListener("click", (event) => {
            const cardForDelete = event.target.closest(".group__rectangle");
            this._handleTrashIcon(this._card, cardForDelete);
        });
    }

    getCard(){
        this._makeCard();
        this._setEventListeners();
        
        return this._element;
    }
}