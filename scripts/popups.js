const openPopup = (kindOfPopup) => {
    kindOfPopup.classList.add("popup_opened");
    document.addEventListener("keydown", handleClosePopupByEsc); 
}

const closePopup = (kindOfPopup) => {
    document.removeEventListener("keydown", handleClosePopupByEsc); 
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
       || event.target.classList.contains("popup_background_fullscreen"))
        {
        handleClosePopupProfile();
        handleClosePopupCard();
        handleCloseFullscreenPopup()
        }
}

const setOpeningProfilePopupValues = () => {
    popupEditProfileName.value = profileName.textContent;
    popupEditProfileDescription.value = profileDescription.textContent;
}
const handleOpenProfilePopup = () => {
    setOpeningProfilePopupValues();
    openPopup(popupProfile);
}
const handleClosePopupProfile = () => {
    closePopup(popupProfile);
}
const setTextEditProfilePopup = (name, description) => {
    profileName.textContent = name.value;
    profileDescription.textContent = description.value;
}
const handleSubmitEditProfile = (event) => {
    event.preventDefault();
    setTextEditProfilePopup(popupEditProfileName, popupEditProfileDescription);
    closePopup(popupProfile);
}
editButton.addEventListener("click", handleOpenProfilePopup);
profileEditSubmit.addEventListener("submit", handleSubmitEditProfile);
popupCloseProfileIcon.addEventListener("click", handleClosePopupProfile);
popupProfileOverlay.addEventListener("click", handleClosePopupsByClickOverlay)


const setOpeningCardPopupValue = () => {
    cardNameEdit.value = '';
    cardLinkEdit.value = '';
}
const handleOpenCardPopup = () => {
    setOpeningCardPopupValue();
    openPopup(popupCard);
}
const handleClosePopupCard = () => {
    closePopup(popupCard);
}
const setCardNewItem = (name, link) => {
    return newItem = {
        name: name.value, 
        link: link.value,
    }
}
const handleSubmitAddNewCard = (event) => {
    event.preventDefault();
    addCardToBegin(setCardNewItem(cardNameEdit, cardLinkEdit));
    handleClosePopupCard();
}
cardAddButton.addEventListener("click", handleOpenCardPopup);
cardAddSubmit.addEventListener("submit", handleSubmitAddNewCard);  
popupCloseCardIcon.addEventListener("click", handleClosePopupCard);
popupCardOverlay.addEventListener("click", handleClosePopupsByClickOverlay);


const setFullscreenPopupValues = (src, caption) => {
    popupFullImage.src = src;
    popupFullImageCaption.textContent = caption;
    popupFullImage.alt = caption;
}

const handleOpenPopupFullscreenImage = (event) => {

    const fullscreenOpeningImage = event.target;
    const fullscreenOpeningImageCard = event.target.closest(".group__rectangle")
    const fullScreenImageSrc = fullscreenOpeningImage.src;
    const fullScreenImageCaption = fullscreenOpeningImageCard.querySelector(".group__name").textContent;

    setFullscreenPopupValues(fullScreenImageSrc, fullScreenImageCaption);
    openPopup(popupFullscreen);
}
const handleCloseFullscreenPopup = () => {
    closePopup(popupFullscreen);
}

popupFullscreenCloseIcon.addEventListener("click", handleCloseFullscreenPopup);
popupFullscreenImageOverlay.addEventListener("click", handleClosePopupsByClickOverlay);