import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import Popup from "./Popup.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";

/* Переменные для базовых действий с попапами */
const editButton = document.querySelector(".profile__info-edit");
const cardAddButton = document.querySelector(".profile__add");

/* Переменные для редактирования профиля через попап */
const popupEditProfileName = document.querySelector(".popup__text_profile-name");
const popupEditProfileDescription = document.querySelector(".popup__text_profile-description");

/* Переменные для попапа с большими изображениями из карт */
const popupFullscreen = document.querySelector(".popup_fullscreen-image");
const popupFullImage = document.querySelector(".popup__fullscreen-image");
const popupFullImageCaption = document.querySelector(".popup__fullscreen-caption");

const cardsArray = [
    {
        cardname: 'Республика Коми',
        cardlink: './images/respublika_comi.jpg'
    },
    {
        cardname: 'Озеро Байкал',
        cardlink: './images/baikal-lake.jpg'
    },
    {
        cardname: 'Камчатка',
        cardlink: './images/kamchatka.jpg'
    },
    {
        cardname: 'Онежское озеро',
        cardlink: './images/onega-lake.jpg'
    },
    {
        cardname: 'Парк Монрепо',
        cardlink: './images/park-monrepo.jpg'
    },
    {
        cardname: 'Тулиновка',
        cardlink: './images/tulinovka.jpg'
    }
]

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

const handleCardClick = (data) => {
    popupFullImageObject.open(data)
}

const user = new UserInfo({nameSelector: '.profile__info-name', selfInfoSelector: '.profile__info-description'});

const popupProfileObject = new PopupWithForm({selector: '.popup_profile', handleFormSubmit: (data) => {
                                                user.setUserInfo(data);
                                                popupProfileObject.close();
                                            }});

const popupCardObject = new PopupWithForm({selector: '.popup_card-add', handleFormSubmit: (element) => {
                                             console.log(element);
                                             const card = new Card(element, "#group__cards", handleCardClick);
                                             initialCardsArray.addItem(card.getCard(), true);
                                             popupCardObject.close();                  
                                         }});

const initialCardsArray = new Section({items: cardsArray,
                                       renderer: (element) => { 
                                           const card = new Card(element, "#group__cards", handleCardClick);
                                           initialCardsArray.addItem(card.getCard());
                                    }}, '.group');
                                    
const popupFullImageObject = new PopupWithImage('.popup_fullscreen-image');

initialCardsArray.renderItems();
popupProfileObject.setEventListeners();
popupCardObject.setEventListeners();
popupFullImageObject.setEventListeners();
editButton.addEventListener('mousedown', () => {
    popupEditProfileName.value = user.getUserInfo().username;
    popupEditProfileDescription.value = user.getUserInfo().userinfo;
    popupProfileObject.open();
})
cardAddButton.addEventListener('mousedown', () => {
    popupCardObject.open();
})