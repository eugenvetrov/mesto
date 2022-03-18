import './index.css';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

/* Переменные для базовых действий с попапами */
const editButton = document.querySelector(".profile__info-edit");
const cardAddButton = document.querySelector(".profile__add");

/* Переменные для редактирования профиля через попап */
const popupEditProfileName = document.querySelector(".popup__text_profile-name");
const popupEditProfileDescription = document.querySelector(".popup__text_profile-description");

import KomiImg from '../images/respublika_comi.jpg';
import BaikalImg from '../images/baikal-lake.jpg';
import KamchatkaImg from '../images/kamchatka.jpg';
import OnegaImg from '../images/onega-lake.jpg';
import MonrepoImg from '../images/park-monrepo.jpg';
import TulinovkaImg from '../images/respublika_comi.jpg';

const cardsArray = [
    {
        cardname: 'Республика Коми',
        cardlink: KomiImg
    },
    {
        cardname: 'Озеро Байкал',
        cardlink: BaikalImg
    },
    {
        cardname: 'Камчатка',
        cardlink: KamchatkaImg
    },
    {
        cardname: 'Онежское озеро',
        cardlink: OnegaImg
    },
    {
        cardname: 'Парк Монрепо',
        cardlink: MonrepoImg
    },
    {
        cardname: 'Тулиновка',
        cardlink: TulinovkaImg
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
    formValidators['profile-form'].resetValidation();
    popupEditProfileName.value = user.getUserInfo().username;
    popupEditProfileDescription.value = user.getUserInfo().userinfo;
    popupProfileObject.open();
})
cardAddButton.addEventListener('mousedown', () => {
    formValidators['card-form'].resetValidation();
    popupCardObject.open();
})