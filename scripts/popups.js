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

    const setOpeningProfilePopupValues = () => {
        popupEditProfileName.value = profileName.textContent;
        popupEditProfileDescription.value = profileDescription.textContent;
    }

    const openProfilePopup = () => {
        openPopup(popupProfile);        
    }

    const openAndSetProfilePopup = () => {
        setOpeningProfilePopupValues();
        openProfilePopup();
    }
    
    const closePopupProfile = () => {
        closePopup(popupProfile);
    }

    const setTextEditProfilePopup = () => {
        profileName.textContent = popupEditProfileName.value;
        profileDescription.textContent = popupEditProfileDescription.value;
    }
    
    const submitEditProfilePopup = (event) => {
        event.preventDefault();
        setTextEditProfilePopup();
        closePopup(popupProfile);
    }
    
    const addProfileEditButtonListener = () => {
        editButton.addEventListener("click", openAndSetProfilePopup);
    }

    const addSubmitProfileEditing = () => {
        profileEditSubmit.addEventListener("submit", submitEditProfilePopup);
    }

    const addProfilePopupCloseListener = () => {
        popupCloseProfile.addEventListener("click", closePopupProfile);
    }

    const addProfilePopupListeners = () => {
        addProfileEditButtonListener();
        addSubmitProfileEditing();
        addProfilePopupCloseListener();
    }

    addProfilePopupListeners();
    
}

/* Функция для попапа по добавлению карт */
const cardPopup = () => {

    const setOpeningCardPopupValue = () => {
        cardNameEdit.value = '';
        cardLinkEdit.value = '';
    }
    
    const openCardPopup = () => {
        openPopup(popupCard);
    }

    const openAndSetCardPopup = () => {
        openCardPopup();
        setOpeningCardPopupValue();
    }

    const closePopupCard = () => {
        closePopup(popupCard);
    }

    const setCardNewItem = () => {
        return newItem = {
            name: cardNameEdit.value, 
            link: cardLinkEdit.value,
        }
    }

    const addNewCardItemToArray = () => {
        const item = setCardNewItem()
        cardsArray.unshift(item);
    }

    const addNewCard = (event) => {
        event.preventDefault();
        addNewCardItemToArray();
        addCardToBegin(cardsArray[0]);
        closePopupCard();
    }

    const addCardAddButtonListener = () => {
        addButton.addEventListener("click", openAndSetCardPopup);
    }
    
    const addSubmitCardAddingListener = () => {
        cardAddSubmit.addEventListener("submit", addNewCard);
    }

    const addCardPopupCloseListener = () => {
        popupCloseCard.addEventListener("click", closePopupCard);
    }

    const addCardPopupListeners = () => {
        addCardAddButtonListener();
        addSubmitCardAddingListener();
        addCardPopupCloseListener();
    }

    addCardPopupListeners();

}

/* Функция для раскрытия изображения карты на весь экран */
const addFullscreenPopupListeners = (fullscreenOpeningImage, fullScreenImageSrc, fullScreenImageCaption) => {

    const setFullscreenImage = (image) => {
        popupFullImage.src = image;
    }

    const setFullscreenImageCaption = (caption) => {
        popupFullImageCaption.textContent = caption;
    }

    const setFullScreenImageAltTeg = (alt) => {
        popupFullImage.alt = alt;
    }

    const openFullscreenPopup = () => {
        openPopup(popupFullscreen);        
    }

    const setAndOpenFullscreenPopupHandler = () => {
        setFullscreenImage(fullScreenImageSrc);
        setFullscreenImageCaption(fullScreenImageCaption);
        setFullScreenImageAltTeg(fullScreenImageCaption);
        openFullscreenPopup();
    }

    const closeFullscreenPopup = () => {
        closePopup(popupFullscreen);
    }

    const addOpenFullscreenPopupListener = () => {
        fullscreenOpeningImage.addEventListener("click", () => {
            setAndOpenFullscreenPopupHandler()
        });
    }

    const addCloseFullsscreenPopupListener = () => {
        popupCloseFullscreen.addEventListener("click", closeFullscreenPopup);
    }

    const addFullscreenPopupListeners = () => {
        addOpenFullscreenPopupListener();
        addCloseFullsscreenPopupListener();
    }

    addFullscreenPopupListeners();
    
}