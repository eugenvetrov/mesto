const openPopup = (kindOfPopup) => {
    kindOfPopup.classList.add("popup_opened");
}

const cleanErrorsInsidePopup = (kindOfPopup) => {
    const errorsInsidePopup = Array.from(kindOfPopup.querySelectorAll(".popup__error"));
    errorsInsidePopup.forEach(input => input.textContent = '')
}

const closePopup = (kindOfPopup) => {
    kindOfPopup.classList.remove("popup_opened");
    cleanErrorsInsidePopup(kindOfPopup)
}

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
const popupCloseProfileHandler = (event) => {
    closePopup(popupProfile);
}
const popupCloseByEscProfileHandler = (event) => {
    if(event.key === 'Escape') {
        popupCloseProfileHandler();
    }
}
const setTextEditProfilePopup = (name, description) => {
    profileName.textContent = name.value;
    profileDescription.textContent = description.value;
}
const profileEditSubmitHandler = (event) => {
    event.preventDefault();
    setTextEditProfilePopup(popupEditProfileName, popupEditProfileDescription);
    closePopup(popupProfile);
}

editButton.addEventListener("click", openAndSetProfilePopup);  
profileEditSubmit.addEventListener("submit", profileEditSubmitHandler);  
popupCloseProfile.addEventListener("click", popupCloseProfileHandler);
document.addEventListener("keydown", popupCloseByEscProfileHandler);


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
const popupCloseByEscCardHandler = (event) => {
    if(event.key === 'Escape') {
        closePopupCard();        
    }
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
document.addEventListener("keydown", popupCloseByEscCardHandler);


const fullscreenPopupHandler = (event) => {

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
}
const closeFullscreenPopup = () => {
    closePopup(popupFullscreen);
}
const popupCloseByEscFullscreenHandler = (event) => {
    if(event.key === 'Escape') {
        closeFullscreenPopup();        
    }
}
popupCloseFullscreen.addEventListener("click", closeFullscreenPopup);
document.addEventListener("keydown", popupCloseByEscFullscreenHandler);

const closePopupsByOverlayClickHandler = (event) => {
    if (event.target.classList.contains("popup_background_form")
       || event.target.classList.contains("popup_background_fullscreen")
      ) {
        popupCloseProfileHandler();
        closePopupCard();
        closeFullscreenPopup()
      }
}

document.addEventListener("click", closePopupsByOverlayClickHandler)