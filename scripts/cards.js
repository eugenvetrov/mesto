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
    group.prepend(readyCard);
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

    likeIcon.addEventListener("click", (event) => {
        event.preventDefault;
        likeIcon.classList.toggle("group__like-icon_active");
        }
    );

    
    trashIcon.addEventListener("click", (event) => {
        event.preventDefault;
        cardForDelete.remove();
        }
    );

    fullscreenPopupListener(cardImage, element.link, element.name)

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
    const cardTemplate = document.querySelector("#group__cards").content.cloneNode(true);
    return cardTemplate;
}


