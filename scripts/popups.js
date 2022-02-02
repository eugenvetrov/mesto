const openPopup = (kindOfPopup) => {
    kindOfPopup.classList.add("popup_opened");
}

const closePopup = (kindOfPopup) => {
    kindOfPopup.classList.remove("popup_opened");
    cleanErrorsInsidePopup(kindOfPopup);
}

const cleanErrorsInsidePopup = (kindOfPopup) => {
    const errorsInsidePopup = Array.from(kindOfPopup.querySelectorAll(".popup__error"));
    errorsInsidePopup.forEach(input => input.textContent = '')
}

const handleClosePopupByEsc = (event) => {
    const activePopup = document.querySelector(".popup_opened")
    if(event.key === 'Escape') {
        if(activePopup.classList.contains("popup_profile")) {
            handleClosePopupProfile();
        } else if(activePopup.classList.contains("popup_card-add")) {
            handleClosePopupCard();
        } else if(activePopup.classList.contains("popup_fullscreen-image")) {
            handleCloseFullscreenPopup();
        }
    }
}

const handleClosePopupsByClickOverlay = (event) => {
    if (event.target.classList.contains("popup_background_form")
       || event.target.classList.contains("popup_background_fullscreen")
      ) {
        handleClosePopupProfile();
        handleClosePopupCard();
        handleCloseFullscreenPopup()
      }
}

const setOpeningProfilePopupValues = () => {
    popupEditProfileName.value = profileName.textContent;
    popupEditProfileDescription.value = profileDescription.textContent;
}
const openProfilePopup = () => {
    openPopup(popupProfile);
    editButton.removeEventListener("click", openAndSetProfilePopup);  
    profileEditSubmit.addEventListener("submit", handleSubmitEditProfile);
    popupCloseProfile.addEventListener("click", handleClosePopupProfile);
    popupProfileOverlay.addEventListener("click", handleClosePopupsByClickOverlay)
    document.addEventListener("keydown", handleClosePopupByEsc);
}
const openAndSetProfilePopup = () => {
    setOpeningProfilePopupValues();
    openProfilePopup();
}
const handleClosePopupProfile = (event) => {
    editButton.addEventListener("click", openAndSetProfilePopup);  
    profileEditSubmit.removeEventListener("submit", handleSubmitEditProfile);
    popupCloseProfile.removeEventListener("click", handleClosePopupProfile);
    popupProfileOverlay.removeEventListener("click", handleClosePopupsByClickOverlay);
    document.removeEventListener("keydown", handleClosePopupByEsc);
    closePopup(popupProfile);
}

const setTextEditProfilePopup = (name, description) => {
    profileName.textContent = name.value;
    profileDescription.textContent = description.value;
}
const handleSubmitEditProfile = (event) => {
    event.preventDefault();
    editButton.addEventListener("click", openAndSetProfilePopup); 
    setTextEditProfilePopup(popupEditProfileName, popupEditProfileDescription);
    closePopup(popupProfile);
}

editButton.addEventListener("click", openAndSetProfilePopup);  


const setOpeningCardPopupValue = () => {
    cardNameEdit.value = '';
    cardLinkEdit.value = '';
}
const openCardPopup = () => {
    openPopup(popupCard);
    addButton.removeEventListener("click", openAndSetCardPopup);  
    cardAddSubmit.addEventListener("submit", addNewCard);  
    popupCloseCard.addEventListener("click", handleClosePopupCard);
    popupCardOverlay.addEventListener("click", handleClosePopupsByClickOverlay);
    document.addEventListener("keydown", handleClosePopupByEsc); 
}
const openAndSetCardPopup = () => {
    openCardPopup();
    setOpeningCardPopupValue();
}
const handleClosePopupCard = () => {
    addButton.addEventListener("click", openAndSetCardPopup);  
    cardAddSubmit.removeEventListener("submit", addNewCard);  
    popupCloseCard.removeEventListener("click", handleClosePopupCard);
    popupCardOverlay.removeEventListener("click", handleClosePopupsByClickOverlay);
    document.removeEventListener("keydown", handleClosePopupByEsc); 
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
    addButton.addEventListener("click", openAndSetCardPopup);  
    addCardToBegin(setCardNewItem(cardNameEdit, cardLinkEdit));
    handleClosePopupCard();
}
addButton.addEventListener("click", openAndSetCardPopup);  


const handlePopupFullscreenImage = (event) => {

    const fullscreenOpeningImage = event.target;
    const fullscreenOpeningImageCard = event.target.closest(".group__rectangle")
    const fullScreenImageSrc = fullscreenOpeningImage.src;
    const fullScreenImageCaption = fullscreenOpeningImageCard.querySelector(".group__name").textContent;

    const setFullscreenPopupValues = (src, caption) => {
        popupFullImage.src = src;
        popupFullImageCaption.textContent = caption;
        popupFullImage.alt = caption;
    }
    setFullscreenPopupValues(fullScreenImageSrc, fullScreenImageCaption);
    openPopup(popupFullscreen);
    popupCloseFullscreen.addEventListener("click", handleCloseFullscreenPopup);
    popupFullscreenImageOverlay.addEventListener("click", handleClosePopupsByClickOverlay);
    document.addEventListener("keydown", handleClosePopupByEsc);
}
const handleCloseFullscreenPopup = () => {
    popupCloseFullscreen.removeEventListener("click", handleCloseFullscreenPopup);
    popupFullscreenImageOverlay.removeEventListener("click", handleClosePopupsByClickOverlay);
    document.removeEventListener("keydown", handleClosePopupByEsc);
    closePopup(popupFullscreen);
}

