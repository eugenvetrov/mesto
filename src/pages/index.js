import "./index.css";
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

import {
  config,
  editButton,
  cardAddButton,
  avatarEditButton,
  popupEditProfileName,
  popupEditProfileDescription,
} from "../utils/constants.js";

const formValidators = {};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, config);
    const formName = formElement.getAttribute("name");
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(config);

const handleLikeCardSuccess = (res, cardElement) => {
  cardElement.setCardLikes(res);
  cardElement.showLikeOffOn();
};

const handleDeleteLikeCard = (cardElement) => {
  api
    .deleteLikeCard(cardElement.getCardId())
    .then((res) => {
      handleLikeCardSuccess(res, cardElement);
    })
    .catch((err) => {
      console.log(err);
    });
};

const handlePutLikeCard = (cardElement) => {
  api
    .putLikeCard(cardElement.getCardId())
    .then((res) => {
      handleLikeCardSuccess(res, cardElement);
    })
    .catch((err) => {
      console.log(err);
    });
};

const handleCardClick = (data) => {
  popupFullImageObject.open(data);
};

const handleTrashIcon = (card, cardForDelete) => {
  popupCardDeleteConfirmation.open(card, cardForDelete);
};

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-37",
  headers: {
    authorization: "bcc22094-6aca-4aef-ba1e-307f93bc116d",
    "Content-type": "application/json",
  },
});

const user = new UserInfo({
  nameSelector: ".profile__info-name",
  selfInfoSelector: ".profile__info-description",
  avatarSelector: ".profile__avatar",
});

const popupProfileObject = new PopupWithForm({
  selector: ".popup_profile",
  handleFormSubmit: (data) => {
    popupProfileObject.setSubmitText("Сохранение...");
    api
      .setUserInfo(data.name, data.about)
      .then((userInfo) => {
        user.setUserInfo(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
    popupProfileObject.close();
    popupProfileObject.setSubmitText("Сохранить");
  },
});

const popupCardObject = new PopupWithForm({
  selector: ".popup_card-add",
  handleFormSubmit: (element) => {
    popupCardObject.setSubmitText("Создание...");
    api
      .addCard(element)
      .then((res) => {
        initialCardsArray.addItem(res, true);
      })
      .catch((err) => {
        console.log(err);
      });
    popupCardObject.close();
    popupCardObject.setSubmitText("Создать");
  },
});

const popupCardDeleteConfirmation = new PopupWithConfirmation({
  selector: ".popup_delete-card",
  handleFormSubmit: (card, cardForDelete) => {
    api.deleteCard(card).catch((err) => {
      console.log(err);
    });
    cardForDelete.remove();
    popupCardDeleteConfirmation.close();
  },
});

const popupAvatarEdit = new PopupWithForm({
  selector: ".popup_profile-avatar",
  handleFormSubmit: (link) => {
    popupAvatarEdit.setSubmitText("Сохранение...");
    api
      .changeAvatar(link.avatar)
      .then(() => api.getUserInfo())
      .then((userInfo) => {
        user.setUserInfo(userInfo);
      })
      .catch((err) => {
        console.log(err);
      });
    popupAvatarEdit.close();
    popupAvatarEdit.setSubmitText("Сохранить");
  },
});

const popupFullImageObject = new PopupWithImage(".popup_fullscreen-image");

const initialCardsArray = new Section(
  {
    renderer: (element) => {
      const cardElement = new Card(element, "#group__cards", user._id, {
        handleCardClick,
        handleTrashIcon,
        handleLikeIcon: () => {
          const isCardLikeByMe = cardElement.getIsLiked();
          isCardLikeByMe
            ? handleDeleteLikeCard(cardElement)
            : handlePutLikeCard(cardElement);
        },
      });
      return cardElement;
    },
  },
  ".group"
);

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, cards]) => {
    user.setUserInfo(userData);
    initialCardsArray.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

popupProfileObject.setEventListeners();
popupCardObject.setEventListeners();
popupFullImageObject.setEventListeners();
popupCardDeleteConfirmation.setEventListeners();
popupAvatarEdit.setEventListeners();
editButton.addEventListener("click", () => {
  formValidators["profile-form"].resetValidation();
  const { name, about } = user.getUserInfo();
  popupEditProfileName.value = name;
  popupEditProfileDescription.value = about;
  popupProfileObject.open();
});
cardAddButton.addEventListener("click", () => {
  formValidators["card-form"].resetValidation();
  popupCardObject.open();
});
avatarEditButton.addEventListener("click", () => {
  formValidators["profile-avatar-form"].resetValidation();
  popupAvatarEdit.open();
});
