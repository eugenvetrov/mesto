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
    if(event.key === 'Escape'){
        closePopup(activePopup);
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
    document.addEventListener("keydown", handleClosePopupByEsc);
}
const openAndSetProfilePopup = () => {
    setOpeningProfilePopupValues();
    openProfilePopup();
}
const handleClosePopupProfile = (event) => {
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
profileEditSubmit.addEventListener("submit", handleSubmitEditProfile);
popupCloseProfile.addEventListener("click", handleClosePopupProfile);
popupProfileOverlay.addEventListener("click", handleClosePopupsByClickOverlay)


const setOpeningCardPopupValue = () => {
    cardNameEdit.value = '';
    cardLinkEdit.value = '';
}
const openCardPopup = () => {
    openPopup(popupCard);
    document.addEventListener("keydown", handleClosePopupByEsc); 
}
const openAndSetCardPopup = () => {
    openCardPopup();
    setOpeningCardPopupValue();
}
const handleClosePopupCard = () => {
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
cardAddSubmit.addEventListener("submit", addNewCard);  
popupCloseCard.addEventListener("click", handleClosePopupCard);
popupCardOverlay.addEventListener("click", handleClosePopupsByClickOverlay);


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
    document.addEventListener("keydown", handleClosePopupByEsc);
}
const handleCloseFullscreenPopup = () => {
    document.removeEventListener("keydown", handleClosePopupByEsc);
    closePopup(popupFullscreen);
}

popupCloseFullscreen.addEventListener("click", handleCloseFullscreenPopup);
popupFullscreenImageOverlay.addEventListener("click", handleClosePopupsByClickOverlay);