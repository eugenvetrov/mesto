/* Функции для карточек и лайков
   Необходимо добавление popups.js после cards.js
*/

const addInitialCards = () => {
        cardsArray.forEach((element) => {
        addCardToEnd(element)
    }
        );
}

const addCardToBegin = (element) => {
    const readyCard = renderCard(element);
    const renderedCards = Array.from(group.children);
    renderedCards[0].after(readyCard);
}

const addCardToEnd = (element) => {
    const readyCard = renderCard(element)
    group.append(readyCard);
}


const renderCard = (element) => {

    const renderingCard = makeCard(element.link, element.name);
    const likeIcon = renderingCard.querySelector(".group__like-icon");
    const trashIcon = renderingCard.querySelector(".group__delete-icon");
    const cardForDelete  = renderingCard.querySelector(".group__rectangle");
    const cardImage = renderingCard.querySelector(".group__image");

    const addLikeListener = (like) => {
        like.addEventListener("click", (event) => {
            event.preventDefault;
            toggleLikeIconHandler(like);
        }
            );
    }

    const toggleLikeIconHandler = (icon) => {
        const likeIsActive = icon.classList.contains("group__like-icon_active")
        if (!likeIsActive) {
            likeIcon.classList.add("group__like-icon_active");
        } else if (likeIsActive){
            likeIcon.classList.remove("group__like-icon_active");
        }
    }
    
    const addDeleteListener = (icon) => {
        icon.addEventListener("click", (event) => {
            event.preventDefault;
            deleteCardHandler(cardForDelete);
        }
            );
    }

    const deleteCardHandler = (card) => {
        card.remove();
    }

    const addListenersOfCard = () => {
        addLikeListener(likeIcon);
        addDeleteListener(trashIcon);
        addFullscreenPopupListeners(cardImage, element.link, element.name)
    }

    addListenersOfCard();

    return renderingCard;
}

const makeCard = (link, name) => {
    const card = makeCloneTemplateForCard();
    card.querySelector('.group__image').src = link;
    card.querySelector('.group__name').textContent = name;
    card.querySelector('.group__image').alt = name;
    return card;
}

const makeCloneTemplateForCard = () => {
    const cardTemplate = document.querySelector("#group__cards");
    const cardContent = cardTemplate.content;
    const cardTemplateClone = cardContent.cloneNode(true);
    return cardTemplateClone;
}


