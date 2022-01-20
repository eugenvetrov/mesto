/* Переменные для действий с картами */
const cardAddSubmit = document.querySelector(".popup_card-add");
const group = document.querySelector(".group");

/* Переменные для базовых действий с попапами */
const editButton = document.querySelector(".profile__info-edit");
const addButton = document.querySelector(".profile__add");
const popupForms = Array.from(document.querySelectorAll(".popup__form"));        
const popupCloseIcons = Array.from(document.querySelectorAll(".popup__close-icon"));

/* Переменные для редактирования профиля через попап */
const popupProfile = document.querySelector(".popup_profile");
const profileEditSubmit = document.querySelector("[name=profile-form]");
const popupEditProfileName = document.querySelector("[name=profile-form-name]");
const popupEditProfileDescription = document.querySelector("[name=profile-form-description]");
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__info-description");
const popupCloseProfile = document.querySelector(".popup__close-icon_profile");

/* Переменные для добавления карт через попап*/
const popupCard = document.querySelector(".popup_card-add");
const cardNameEdit = document.querySelector("[name=card-form-name]");
const cardLinkEdit = document.querySelector("[name=card-form-link]");
const popupCloseCard = document.querySelector(".popup__close-icon_card-close");

/* Переменные для попапа с большими изображениями из карт */
const popupFullscreen = document.querySelector(".popup_fullscreen-image");
const popupCloseFullscreen = document.querySelector(".popup__close-icon_fullscreen");
const popupFullImage = document.querySelector(".popup__fullscreen-image");
const popupFullImageCaption = document.querySelector(".popup__fullscreen-caption");