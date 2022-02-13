import Card from "./Card.js"
import FormValidator from "./FormValidator.js";

/* Переменные для действий с картами */
const cardAddSubmit = document.querySelector(".popup_card-add");
const group = document.querySelector(".group");

/* Переменные для базовых действий с попапами */
const editButton = document.querySelector(".profile__info-edit");
const cardAddButton = document.querySelector(".profile__add");

/* Переменные для редактирования профиля через попап */
const popupProfile = document.querySelector(".popup_profile");
const profileEditSubmit = document.querySelector(".popup__form_profile");
const popupEditProfileName = document.querySelector(".popup__text_profile-name");
const popupEditProfileDescription = document.querySelector(".popup__text_profile-description");
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__info-description");
const popupCloseProfileIcon = document.querySelector(".popup__close-icon_profile");

/* Переменные для добавления карт через попап*/
const popupCard = document.querySelector(".popup_card-add");
const cardNameEdit = document.querySelector(".popup__text_card-name");
const cardLinkEdit = document.querySelector(".popup__text_card-link");
const popupCloseCardIcon = document.querySelector(".popup__close-icon_card-close");

/* Переменные для попапа с большими изображениями из карт */
const popupFullscreen = document.querySelector(".popup_fullscreen-image");
const popupFullscreenCloseIcon = document.querySelector(".popup__close-icon_fullscreen");
const popupFullImage = document.querySelector(".popup__fullscreen-image");
const popupFullImageCaption = document.querySelector(".popup__fullscreen-caption");

/* Переменные для оверлеев */

const popupProfileOverlay = document.querySelector(".popup_background_form.popup_profile");
const popupCardOverlay = document.querySelector(".popup_background_form.popup_card-add");
const popupFullscreenImageOverlay = document.querySelector(".popup_background_fullscreen.popup_fullscreen-image");

const cardsArray = [
    {
        name: 'Республика Коми',
        link: './images/respublika_comi.jpg'
    },
    {
        name: 'Озеро Байкал',
        link: './images/baikal-lake.jpg'
    },
    {
        name: 'Камчатка',
        link: './images/kamchatka.jpg'
    },
    {
        name: 'Онежское озеро',
        link: './images/onega-lake.jpg'
    },
    {
        name: 'Парк Монрепо',
        link: './images/park-monrepo.jpg'
    },
    {
        name: 'Тулиновка',
        link: './images/tulinovka.jpg'
    }
]

const addInitialCards = () => {
    cardsArray.forEach((element) => {
    addCardToEnd(element)
    });
}

const addCardToBegin = (element) => {
    const readyCard = new Card(element, "#group__cards");
    group.prepend(readyCard.getCard());
}

const addCardToEnd = (element) => {
    const readyCard = new Card(element, "#group__cards");
    group.append(readyCard.getCard());
}

const openPopup = (kindOfPopup) => {
    kindOfPopup.classList.add("popup_opened");
    document.addEventListener("keydown", handleClosePopupsByEsc); 
}

const closePopup = (kindOfPopup) => {
    document.removeEventListener("keydown", handleClosePopupsByEsc); 
    kindOfPopup.classList.remove("popup_opened");
    cleanErrorsInsidePopup(kindOfPopup);
}

const cleanErrorsInsidePopup = (kindOfPopup) => {
    const errorsInsidePopup = Array.from(kindOfPopup.querySelectorAll(".popup__error"));
    errorsInsidePopup.forEach(input => input.textContent = '')
}

const handleClosePopupsByEsc = (event) => {
    const activePopup = document.querySelector(".popup_opened")
    if(event.key === 'Escape'){
        closePopup(activePopup);
    }
}

const handleClosePopupsByClickOverlay = (event) => {
    if (event.target.classList.contains("popup_background_form")
       || event.target.classList.contains("popup_background_fullscreen"))
        {
        handleCloseProfilePopup();
        handleCloseCardPopup();
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
const handleCloseProfilePopup = () => {
    closePopup(popupProfile);
}
const setTextEditProfilePopup = (name, description) => {
    profileName.textContent = name.value;
    profileDescription.textContent = description.value;
}
const handleSubmitEditProfile = (event) => {
    event.preventDefault();
    setTextEditProfilePopup(popupEditProfileName, popupEditProfileDescription);
    handleCloseProfilePopup();
}
editButton.addEventListener("click", handleOpenProfilePopup);
profileEditSubmit.addEventListener("submit", handleSubmitEditProfile);
popupCloseProfileIcon.addEventListener("click", handleCloseProfilePopup);
popupProfileOverlay.addEventListener("click", handleClosePopupsByClickOverlay)


const setOpeningCardPopupValue = () => {
    cardNameEdit.value = '';
    cardLinkEdit.value = '';
}
const handleOpenCardPopup = () => {
    setOpeningCardPopupValue();
    openPopup(popupCard);
}
const handleCloseCardPopup = () => {
    closePopup(popupCard);
}
const setCardNewItem = (name, link) => {
    const newItem = {
        name: name.value, 
        link: link.value,
    }
    return newItem;
}
const handleSubmitAddNewCard = (event) => {
    event.preventDefault();
    addCardToBegin(setCardNewItem(cardNameEdit, cardLinkEdit));
    handleCloseCardPopup();
}
cardAddButton.addEventListener("click", handleOpenCardPopup);
cardAddSubmit.addEventListener("submit", handleSubmitAddNewCard);  
popupCloseCardIcon.addEventListener("click", handleCloseCardPopup);
popupCardOverlay.addEventListener("click", handleClosePopupsByClickOverlay);

const setFullscreenPopupValues = (src, caption) => {
    popupFullImage.src = src;
    popupFullImageCaption.textContent = caption;
    popupFullImage.alt = caption;
}

export const handleOpenPopupFullscreenImage = (event) => {

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

const forms = Array.from(document.querySelectorAll('.popup__form'));
forms.forEach((form) => {
    const validator = new FormValidator({
        formSelector: '.popup__form',
        inputSelector: '.popup__text',
        submitButtonSelector: '.popup__submit',
        inactiveButtonClass: 'popup__submit_disabled',
        inputErrorClass: 'popup__text_error',
        errorClass: 'popup__error_visible'
        },
        form
    );
    
    validator.enableValidation();

    }
);


addInitialCards();
//validation.enableValidation();
