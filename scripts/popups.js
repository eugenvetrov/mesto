/* Функции для попапов
   Необходимо добавление cards.js перед popups.js
*/

/* Базовая функция для открытия попапа */
const openPopup = (kindOfPopup) => {
    kindOfPopup.classList.add("popup_opened");
}
/* Базовая функция для закрытия попапа */
const closePopup = (kindOfPopup) => {
    kindOfPopup.classList.remove("popup_opened");
}
/* Попап для редактирования профиля */
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

/* Функция для попапа по добавлению карт */
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

/* Функция для раскрытия изображения карты на весь экран */
const fullscreenPopup = (image, link, name) => {
    const element = image;
    const src = link;
    const caption = name;
    const openFullscreenPopup = (src, caption) => {
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