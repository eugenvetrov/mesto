const editButton = document.querySelector(".profile__info-edit");
const popup = document.querySelector(".popup");
const profileEditSubmit = document.querySelector(".popup__form");
let editProfileName = document.querySelector(".popup__text:nth-of-type(1)");
let editProfileDescription = document.querySelector(".popup__text:nth-of-type(2)");
/* Выполнил поиск по сложным селекторам, так как в ревью отмечено, 
что класс должен быть одинаковым. Если необходимо
создать модификаторы для полей в классах, готов переделать */
let profileName = document.querySelector(".profile__info-name");
let profileDescription = document.querySelector(".profile__info-description");
const popupClose = document.querySelector(".popup__close-icon")

const openPopup = () => {
	popup.classList.add("popup_opened");
	editProfileName.value = profileName.textContent;
	editProfileDescription.value = profileDescription.textContent;
}

const closePopup = () => {
	popup.classList.remove("popup_opened");
}

const editProfilePopup = (event) => {
	event.preventDefault();
    profileName.textContent = editProfileName.value
	profileDescription.textContent = editProfileDescription.value
	closePopup();
}

editButton.addEventListener("click", openPopup);

profileEditSubmit.addEventListener("submit", editProfilePopup);

popupClose.addEventListener("click", closePopup)
