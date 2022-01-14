/* Переменные для действий с картами */
const cardTemplate = document.querySelector("#group__cards");
const cardContent = cardTemplate.content;
const cardAddSubmit = Array.prototype.slice.call(document.querySelectorAll(".popup__form"))[1];
const group = document.querySelector(".group");
const trashIcons = Array.prototype.slice.call(document.querySelectorAll(".group__delete-icon"));

/* Переменные для базовых действий с попапами */
const editButton = document.querySelector(".profile__info-edit");
const addButton = document.querySelector(".profile__add");
const popupForms = Array.prototype.slice.call(document.querySelectorAll(".popup__form"));        
const popupCloseIcons = Array.prototype.slice.call(document.querySelectorAll(".popup__close-icon"));

/* Переменные для редактирования профиля через попап */
const popupProfile = document.querySelectorAll(".popup")[0];
const profileEditSubmit = popupForms[0];
const popupEditProfileName = Array.prototype.slice.call(document.querySelectorAll(".popup__text:nth-of-type(1)"))[0];
const popupEditProfileDescription = Array.prototype.slice.call(document.querySelectorAll(".popup__text:nth-of-type(2)"))[0];
const profileName = document.querySelector(".profile__info-name");
const profileDescription = document.querySelector(".profile__info-description");
const popupCloseProfile = popupCloseIcons[0];

/* Переменные для добавления карт через попап*/
const popupCard = document.querySelectorAll(".popup")[1];
const cardNameEdit = Array.prototype.slice.call(document.querySelectorAll(".popup__text:nth-of-type(1)"))[1];
const cardLinkEdit = Array.prototype.slice.call(document.querySelectorAll(".popup__text:nth-of-type(2)"))[1];
const popupCloseCard = Array.prototype.slice.call(document.querySelectorAll(".popup__close-icon"))[1];

/* Переменные для попапа с большими изображениями из карт */
const popupFullscreen = document.querySelectorAll(".popup")[2];
const popupCloseFullscreen = Array.prototype.slice.call(document.querySelectorAll(".popup__close-icon"))[2];
const popupFullImage = document.querySelector(".popup__fullscreen-image");
const popupFullImageCaption = document.querySelector(".popup__fullscreen-caption");