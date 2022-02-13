import { handleOpenPopupFullscreenImage } from "./index.js";

export default class Card {
    constructor(element, cardSelector){
        this.name = element.name;
        this.link = element.link;
        this.cardSelector = cardSelector;
    }

    _makeCloneTemplateForCard() {
        const cardTemplate = document.querySelector("#group__cards").content.cloneNode(true);
        return cardTemplate;
    }

    _makeCard() {
        const card = this._makeCloneTemplateForCard();
        card.querySelector('.group__image').src = this.link;
        card.querySelector('.group__name').textContent = this.name;
        card.querySelector('.group__image').alt = this.name;
        return card;
    }

    getCard() {

        const renderingCard = this._makeCard();
        const likeIcon = renderingCard.querySelector(".group__like-icon");
        const trashIcon = renderingCard.querySelector(".group__delete-icon");
        const cardImage = renderingCard.querySelector(".group__image");
        
        const handleLikeIcon = (event) => {
            event.preventDefault;
            const like = event.target;
            like.classList.toggle("group__like-icon_active");
        }
        
        likeIcon.addEventListener("click", handleLikeIcon);
        
        const handleTrashIcon = (event) => {
            event.preventDefault;
            const cardForDelete = event.target.closest(".group__rectangle");
            cardForDelete.remove();
        }
        
        cardImage.addEventListener("click", handleOpenPopupFullscreenImage);
        trashIcon.addEventListener("click", handleTrashIcon);
        
        return renderingCard;
    }
}