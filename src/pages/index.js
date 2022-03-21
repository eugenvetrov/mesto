import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import { cardsArray } from "../utils/constants.js";

/* Переменные для базовых действий с попапами */
const editButton = document.querySelector(".profile__info-edit");
const cardAddButton = document.querySelector(".profile__add");

/* Переменные для редактирования профиля через попап */
const popupEditProfileName = document.querySelector(".popup__text_profile-name");
const popupEditProfileDescription = document.querySelector(".popup__text_profile-description");

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

function createCard(element) {
    const cardElement = new Card(element, "#group__cards", handleCardClick);
    return cardElement;
}

const handleCardClick = (data) => {
    popupFullImageObject.open(data)
}

const user = new UserInfo({nameSelector: '.profile__info-name', selfInfoSelector: '.profile__info-description'});

const popupProfileObject = new PopupWithForm({selector: '.popup_profile', handleFormSubmit: (data) => {
                                                user.setUserInfo(data);
                                                popupProfileObject.close();
                                            }});

const popupCardObject = new PopupWithForm({selector: '.popup_card-add', handleFormSubmit: (element) => {
                                                                        const card = createCard(element);
                                                                        initialCardsArray.addItem(card.getCard(), true);
                                                                        popupCardObject.close();
                                                                    }});

const initialCardsArray = new Section({items: cardsArray,
                                       renderer: (element) => { 
                                           const card = createCard(element);
                                           initialCardsArray.addItem(card.getCard());
                                    }}, '.group');
                                    
const popupFullImageObject = new PopupWithImage('.popup_fullscreen-image');

initialCardsArray.renderItems();
popupProfileObject.setEventListeners();
popupCardObject.setEventListeners();
popupFullImageObject.setEventListeners();
editButton.addEventListener('click', () => {
    formValidators['profile-form'].resetValidation();
    const {userName, userInfo} = user.getUserInfo()
    popupEditProfileName.value = userName;
    popupEditProfileDescription.value = userInfo;
    popupProfileObject.open();
})
cardAddButton.addEventListener('click', () => {
    formValidators['card-form'].resetValidation();
    popupCardObject.open();
})