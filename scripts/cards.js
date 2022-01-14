/* Функции для карточек и лайков
   Необходимо добавление popups.js после cards.js
*/

//Функция для монтажа карты
const makeCard = (link, name) => {
    const card = cardContent.cloneNode(true);
    card.querySelector('.group__image').src = link;
    card.querySelector('.group__name').textContent = name;
    return card;
}

//Функция для рендера всех карт из массива
const renderCards = () => {
    cardsArray.forEach((element) => renderCard(element));
}

/* Функция для монтажа и рендера каждой карты
   Принимает элемент из массива
   По умолчанию добавляет карту в конец секции
   При флаге toBegin добавляет карту в начало секции
   */
const renderCard = (element, toBegin) => {
    const card = makeCard(element.link, element.name);
    const cardImage = card.querySelector(".group__image");
    const likeIcon = card.querySelector(".group__like-icon");
    const trashIcon = card.querySelector(".group__delete-icon");
    const readyCard = card.querySelector(".group__rectangle");
    /* Переключатель состояния "Нравится"/"Не нравится" переданному элементу массива */
    const likeToggler = () => {
        element.like = !element.like;
    }
    /* Рендер лайка для смонтированной карты */
    const renderLike = () => {
        if (element.like == true) {
            likeIcon.setAttribute("src", "./images/like-active.svg");
            likeIcon.classList.add("group__like-icon_active");
        } else if (element.like == false){
            likeIcon.setAttribute("src", "./images/like.svg");
            likeIcon.classList.remove("group__like-icon_active");
        }
    }
    const likeListener = () => {
        likeToggler();
        renderLike();
    }
    /* Функция для удаления карты из массива и из секции */
    const deleteCard = () => {
        const index = cardsArray.indexOf(element);
        cardsArray.splice(index, 1);
        readyCard.remove(element);
    }
    likeIcon.addEventListener("click", likeListener);
    trashIcon.addEventListener("click", deleteCard);    
    fullscreenPopup(cardImage, element.link, element.name)
    if (toBegin) {
        const renderedCards = Array.prototype.slice.call(group.children);
        renderedCards[0].after(card);
    } else {
    group.append(card);
    }
}
