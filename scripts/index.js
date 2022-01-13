/* Переменные для действий с картами */
const cardTemplate = document.querySelector("#group__cards");
const cardContent = cardTemplate.content;
const cardAddSubmit = Array.prototype.slice.call(document.querySelectorAll(".popup__form"))[1];
const group = document.querySelector(".group");
const trashIcons = Array.prototype.slice.call(document.querySelectorAll(".group__delete-icon"));

/* Переменные для базовых действий с попапами */
const editButton = document.querySelector(".profile__info-edit");
const addButton = document.querySelector(".profile__add");
const popups = Array.prototype.slice.call(document.querySelectorAll(".popup"));
const popupForms = Array.prototype.slice.call(document.querySelectorAll(".popup__form"));        
const popupCloseIcons = Array.prototype.slice.call(document.querySelectorAll(".popup__close-icon"));

/* Переменные для редактирования профиля через попап */
const popupProfile = popups[0];
const profileEditSubmit = popupForms[0];
const popupEditProfileName = Array.prototype.slice.call(document.querySelectorAll(".popup__text:nth-of-type(1)"))[0];
const popupEditProfileDescription = Array.prototype.slice.call(document.querySelectorAll(".popup__text:nth-of-type(2)"))[0];
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__info-description");
const popupCloseProfile = popupCloseIcons[0];

/* Переменные для добавления карт через попап*/
const popupCard = Array.prototype.slice.call(document.querySelectorAll(".popup"))[1];
const cardNameEdit = Array.prototype.slice.call(document.querySelectorAll(".popup__text:nth-of-type(1)"))[1];
const cardLinkEdit = Array.prototype.slice.call(document.querySelectorAll(".popup__text:nth-of-type(2)"))[1];
const popupCloseCard = Array.prototype.slice.call(document.querySelectorAll(".popup__close-icon"))[1];

/* Переменные для попапа с большими изображениями из карт */
const popupFullscreen = Array.prototype.slice.call(document.querySelectorAll(".popup"))[2];
const popupCloseFullscreen = Array.prototype.slice.call(document.querySelectorAll(".popup__close-icon"))[2];
const popupFullImage = document.querySelector(".popup__fullscreen-image");
const popupFullImageCaption = document.querySelector(".popup__fullscreen-caption");

/* Функции для карточек и лайков */

const makeCard = (link, name) => {
    const card = cardContent.cloneNode(true);
    card.querySelector('.group__image').src = link;
    card.querySelector('.group__name').textContent = name;
    return card;
}

const renderCards = () => {
    cardsArray.forEach((element) => renderCard(element));
}

const renderCard = (element, toBegin) => {
    const card = makeCard(element.link, element.name);
    const cardImage = card.querySelector(".group__image");
    const likeIcon = card.querySelector(".group__like-icon");
    const trashIcon = card.querySelector(".group__delete-icon");
    const readyCard = card.querySelector(".group__rectangle");
    const likeToggler = () => {
        element.like = !element.like;
    }
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

/* Функции для попапов */

const openPopup = (kindOfPopup) => {
    kindOfPopup.classList.add("popup_opened");
}

const closePopup = (kindOfPopup) => {
    kindOfPopup.classList.remove("popup_opened");
}

const profilePopup = () => {

    const openProfilePopup = () => {
        openPopup(popupProfile);
        popupEditProfileName.value = profileName.textContent;
        popupEditProfileDescription.value = profileDescription.textContent;
    }
    
    const closePopupProfile = () => {
        closePopup(popupProfile);
    }
    
    const editProfilePopup = (event) => {
        event.preventDefault();
        profileName.textContent = popupEditProfileName.value;
        profileDescription.textContent = popupEditProfileDescription.value;
        closePopup(popupProfile);
    }
    
editButton.addEventListener("click", openProfilePopup);
profileEditSubmit.addEventListener("submit", editProfilePopup);
popupCloseProfile.addEventListener("click", closePopupProfile);
    
}


const cardPopup = () => {
    
    const openCardPopup = () => {
        openPopup(popupCard);
        cardNameEdit.value = '';
        cardLinkEdit.value = '';
    }

    const closePopupCard = () => {
        closePopup(popupCard);
    }

    const addCard = (event) => {
        event.preventDefault();
        newItem = {
            name: cardNameEdit.value, 
            link: cardLinkEdit.value,
            like: false
        }
        cardsArray.unshift(newItem);
        renderCard(cardsArray[0], true);
        closePopupCard();
    }

addButton.addEventListener("click", openCardPopup);
cardAddSubmit.addEventListener("submit", addCard);
popupCloseCard.addEventListener("click", closePopupCard);
}

const fullscreenPopup = (image, link, name) => {
    const element = image;
    const src = link;
    const caption = name;
    const openFullscreenPopup = (src, caption) => {
        console.log(src, caption)
        openPopup(popupFullscreen);
        popupFullImage.src = src;
        popupFullImageCaption.textContent = caption;
    }
    const closeFullscreenPopup = () => {
        closePopup(popupFullscreen);
    }
    element.addEventListener("click", () => {
        openFullscreenPopup(src, caption)
    })
    popupCloseFullscreen.addEventListener("click", closeFullscreenPopup);
}


profilePopup();
cardPopup();
renderCards();


