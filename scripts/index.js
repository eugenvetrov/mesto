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

console.log('group', group);

function makeCard(link, name) {
    const card = cardContent.cloneNode(true);
    card.querySelector('.group__image').src = link;
    card.querySelector('.group__name').textContent = name;
    return card;
}

function deleteCard() {
    console.log("delete card");
}

function renderCards() {
    cardsArray.forEach((element) => renderCard(element))
}

function renderCard(element, toBegin) {
    const card = makeCard(element.link, element.name)
    console.log({card});
    const icon = card.querySelector(".group__like-icon")
    const likeToggler = () => {
        element.like = !element.like
    }
    const renderLike = () => {
        if (element.like == true) {
            icon.setAttribute("src", "./images/like-active.svg")
            icon.classList.add("group__like-icon_active")
        } else if (element.like == false){
            icon.setAttribute("src", "./images/like.svg")
            icon.classList.remove("group__like-icon_active")
        }
    }
    const likeListener = () => {
        likeToggler()
        renderLike()
    }
    icon.addEventListener("click", () => likeListener())
    if (toBegin) {
        const renderedCards = Array.prototype.slice.call(group.children);
        renderedCards[0].after(card);
    } else {
    group.append(card);
    }
}

renderCards();
debugger

/* Функции для попапов */

function openPopup(kindOfPopup) {
    kindOfPopup.classList.add("popup_opened");
}

function closePopup (kindOfPopup) {
    kindOfPopup.classList.remove("popup_opened");
}

function profilePopup() {

    function openProfilePopup() {
        openPopup(popupProfile);
        popupEditProfileName.value = profileName.textContent;
        popupEditProfileDescription.value = profileDescription.textContent;
    }
    
    function closePopupProfile() {
        popup.closePopup(popupProfile);
    }
    
    const editProfilePopup = (event) => {
        event.preventDefault();
        profileName.textContent = popupEditProfileName.value
        profileDescription.textContent = popupEditProfileDescription.value
        popup.closePopup(popupProfile);
    }
    
editButton.addEventListener("click", openProfilePopup);
profileEditSubmit.addEventListener("submit", editProfilePopup);
popupCloseProfile.addEventListener("click", closePopupProfile);
    
}


function cardPopup() {
    
    function openCardPopup() {
        openPopup(popupCard);
    }

    function closePopupCard() {
        closePopup(popupCard);
    }

    function addCard(event) {
        event.preventDefault();
        newItem = {
            name: cardNameEdit.value, 
            link: cardLinkEdit.value,
            like: false
        }
        cardsArray.unshift(newItem);
        console.log(cardsArray)
        renderCard(cardsArray[0], true)
        debugger
        closePopupCard();
        debugger
    }

addButton.addEventListener("click", openCardPopup);
cardAddSubmit.addEventListener("submit", addCard);
popupCloseCard.addEventListener("click", closePopupCard);
}

profilePopup()
cardPopup()


