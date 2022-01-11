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

function getRenderedCards(){
    return Array.prototype.slice.call(group.children);
}

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
    cardsArray.forEach((element, i) => renderCardToEnd(element, i))
}

function renderCardToEnd(element, i) {
    console.log(element);
    group.append(makeCard(element.link, element.name));
    setLikeListener(element, i)
}

function renderCardToBegin() {
    const renderedCards = getRenderedCards()
    renderedCards[0].after(makeCard(cardsArray[0].link, cardsArray[0].name));
    setLikeListener(0)
}

function likeIconsGet() {
    return Array.prototype.slice.call(document.querySelectorAll(".group__like-icon"));
}

function likeListenerToggler(index) {
    console.log(index);
    if(cardsArray[index].like == true) {
        cardsArray[index].like = false;
    } else if (cardsArray[index].like == false) {
        cardsArray[index].like = true;
    }
    console.log(cardsArray);
}

function renderLikeOfCard(index, likeIcons) {
    console.log(index);
    console.log(likeIcons);
    if (cardsArray[index].like == true) {
        likeIcons[index].setAttribute("src", "./images/like-active.svg")
        likeIcons[index].classList.add("group__like-icon_active")
        console.log(likeIcons[index]);
    } else if (cardsArray[index].like == false){
        likeIcons[index].setAttribute("src", "./images/like.svg")
        likeIcons[index].classList.remove("group__like-icon_active")
    }
}

function setLikeListener(el, index) {
    const likeIcons = Array.prototype.slice.call(document.querySelectorAll(".group__like-icon"));
    console.log(likeIcons);
    likeIcons[index].addEventListener("click", () => {
        console.log(index);
        likeListener(index, likeIcons)}
    )
}

function likeListener(index, likeIcons) {
        likeListenerToggler(index)
        renderLikeOfCard(index, likeIcons)
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
        renderCardToBegin()
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


