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
const cardImage = renderingCard.querySelector(".group__image");

const likeIconHandler = (event) => {
    event.preventDefault;
    const like = event.target;
    like.classList.toggle("group__like-icon_active");
}

likeIcon.addEventListener("click", likeIconHandler);

const trashIconHandler = (event) => {
    event.preventDefault;

    const cardForDelete = event.target.closest(".group__rectangle");
    const likeForDeleteListener = cardForDelete.querySelector(".group__like-icon");
    const fullScreenImageForDeleteListener = cardForDelete.querySelector(".group__image");

    likeForDeleteListener.removeEventListener("click", likeIconHandler);
    fullScreenImageForDeleteListener.removeEventListener("click", fullscreenPopupHandler)
    cardForDelete.remove();
}

cardImage.addEventListener("click", fullscreenPopupHandler);
trashIcon.addEventListener("click", trashIconHandler);

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

