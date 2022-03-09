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

/* Переменные для добавления карт через попап*/
const popupCard = document.querySelector(".popup_card-add");
const cardNameEdit = document.querySelector(".popup__text_card-name");
const cardLinkEdit = document.querySelector(".popup__text_card-link");

/* Переменные для попапа с большими изображениями из карт */
const popupFullscreen = document.querySelector(".popup_fullscreen-image");
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

const createCard = (element) => {
    const readyCard = new Card(element, "#group__cards", handleCardClick);
    return readyCard.getCard();
}

const createInitialCardsArray = () => {
    const array = cardsArray.map(element => {
        return createCard(element)
    });
    return array;
}

const addInitialCards = () => {
    createInitialCardsArray().forEach(element => {
        group.append(element)
    });
}

const addCardToBegin = (element) => {
    group.prepend(createCard(element));
}

const openPopup = (kindOfPopup) => {
    kindOfPopup.classList.add("popup_opened");
    document.addEventListener("keydown", handleClosePopupsByEsc); 
}

const closePopup = (kindOfPopup) => {
    document.removeEventListener("keydown", handleClosePopupsByEsc); 
    kindOfPopup.classList.remove("popup_opened");
}

const handleClosePopupsByEsc = (event) => {
    if(event.key === 'Escape'){
        const activePopup = document.querySelector(".popup_opened")
        closePopup(activePopup);
    }
}

const setOpeningProfilePopupValues = () => {
    popupEditProfileName.value = profileName.textContent;
    popupEditProfileDescription.value = profileDescription.textContent;
}
const handleOpenProfilePopup = () => {
    setOpeningProfilePopupValues();
    formValidators['profile-form'].resetValidation();
    openPopup(popupProfile);
}
const closeProfilePopup = () => {
    closePopup(popupProfile);
}
const setTextEditProfilePopup = (name, description) => {
    profileName.textContent = name.value;
    profileDescription.textContent = description.value;
}
const handleSubmitEditProfile = (event) => {
    event.preventDefault();
    setTextEditProfilePopup(popupEditProfileName, popupEditProfileDescription);
    closeProfilePopup();
}
editButton.addEventListener("click", handleOpenProfilePopup);
profileEditSubmit.addEventListener("submit", handleSubmitEditProfile);


const setOpeningCardPopupValue = () => {
    cardNameEdit.value = '';
    cardLinkEdit.value = '';
}
const handleOpenCardPopup = () => {
    setOpeningCardPopupValue();
    formValidators['card-form'].resetValidation();
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

function handleCardClick(name, link) {
    popupFullImage.src = link;
    popupFullImageCaption.textContent = name;
    popupFullImage.alt = name;
    openPopup(popupFullscreen);
}

const config = {
    formSelector: '.popup__form',
    inputSelector: '.popup__text',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__text_error',
    errorClass: 'popup__error_visible'
    }

const formValidators = {}

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, config)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation(config);

const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
    popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__close-icon')) {
          closePopup(popup)
        }
    })
})

addInitialCards();
