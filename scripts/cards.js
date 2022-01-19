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
    const card = addCardListeners(element);
    const renderedCards = Array.from(group.children);
    renderedCards[0].after(card);
}

const addCardToEnd = (element) => {
    const readyCard = addCardListeners(element)
    group.append(readyCard);
}


const addCardListeners = (element) => {

    const cardForListenersAdding = makeCard(element.link, element.name);
    const likeIcon = cardForListenersAdding.querySelector(".group__like-icon");
    const trashIcon = cardForListenersAdding.querySelector(".group__delete-icon");
    const cardForDelete  = cardForListenersAdding.querySelector(".group__rectangle");
    const cardImage = cardForListenersAdding.querySelector(".group__image");

    const addLikeListener = () => {
        likeIcon.addEventListener("click", (e) => {
            e.preventDefault;
            toggleLikeIcon(cardForListenersAdding);
        }
            );
    }

    const toggleLikeIcon = () => {
        const likeIsActive = likeIcon.classList.contains("group__like-icon_active")
        if (!likeIsActive) {
            likeIcon.setAttribute("src", "./images/like-active.svg");
            likeIcon.classList.add("group__like-icon_active");
        } else if (likeIsActive){
            likeIcon.setAttribute("src", "./images/like.svg");
            likeIcon.classList.remove("group__like-icon_active");
        }
    }
    
    const addDeleteListener = () => {
        trashIcon.addEventListener("click", (e) => {
            e.preventDefault;
            deleteCard()
        }
            );
    }

    const deleteCard = () => {
        cardForDelete.remove();
    }

    const addListenersOfCard = () => {
        addLikeListener();
        addDeleteListener();
        addFullscreenPopupListeners(cardImage, element.link, element.name)
    }

    addListenersOfCard();

    return cardForListenersAdding;
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


