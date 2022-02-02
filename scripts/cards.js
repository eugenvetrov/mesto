const addInitialCards = () => {
    cardsArray.forEach((element) => {
    addCardToEnd(element)
    });
}

const addCardToBegin = (element) => {
    const readyCard = renderCard(element);
    group.prepend(readyCard);
}

const addCardToEnd = (element) => {
    const readyCard = renderCard(element)
    group.append(readyCard);
}


const renderCard = (element) => {

    const renderingCard = makeCard(element);
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
    
    cardImage.addEventListener("click", handlePopupFullscreenImage);
    trashIcon.addEventListener("click", handleTrashIcon);
    
    return renderingCard;
}

const makeCard = (element) => {
    const card = makeCloneTemplateForCard();
    card.querySelector('.group__image').src = element.link;
    card.querySelector('.group__name').textContent = element.name;
    card.querySelector('.group__image').alt = element.name;
    return card;
}

const makeCloneTemplateForCard = () => {
    const cardTemplate = document.querySelector("#group__cards").content.cloneNode(true);
    return cardTemplate;
}

