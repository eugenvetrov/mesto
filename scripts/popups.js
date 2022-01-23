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

    editButton.addEventListener("click", openAndSetProfilePopup);  
    profileEditSubmit.addEventListener("submit", submitEditProfilePopup);  
    popupCloseProfile.addEventListener("click", closePopupProfile); 
    
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

    const setCardNewItem = (name, link) => {
        return newItem = {
            name: name.value, 
            link: link.value,
        }
    }
    
    const addNewCard = (event) => {
        event.preventDefault();
        addCardToBegin(setCardNewItem(cardNameEdit, cardLinkEdit));
        closePopupCard();
    }
    
    addButton.addEventListener("click", openAndSetCardPopup);  
    cardAddSubmit.addEventListener("submit", addNewCard);  
    popupCloseCard.addEventListener("click", closePopupCard);

}

/* Функция для раскрытия изображения карты на весь экран */
const fullscreenPopupListener = (fullscreenOpeningImage, fullScreenImageSrc, fullScreenImageCaption) => {

    const setFullscreenPopupValues = (src, caption) => {

        popupFullImage.src = src;

        popupFullImageCaption.textContent = caption;
    
        popupFullImage.alt = caption;
    }

    fullscreenOpeningImage.addEventListener("click", () => {
        setFullscreenPopupValues(fullScreenImageSrc, fullScreenImageCaption);
        openPopup(popupFullscreen);
    }
    );
}

const closeFullscreenPopup = () => {
    closePopup(popupFullscreen);
}

popupCloseFullscreen.addEventListener("click", closeFullscreenPopup);

