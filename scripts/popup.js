const editButton = document.querySelector(".profile__info-edit");
const popup = document.querySelector(".popup");
const profileEditSubmit = document.querySelector(".popup__submit");
let editProfileName = document.querySelector(".popup__name");
let editProfileDescription = document.querySelector(".popup__description");
let profileName = document.querySelector(".profile__info-name");
let profileDescription = document.querySelector(".profile__info-description");
const popupClose = document.querySelector(".popup__close-icon")
editButton.addEventListener("click", () => {
	popup.classList.add("popup_opened");
});
profileEditSubmit.addEventListener("click", (event) => {
	event.preventDefault();
    profileName.textContent = editProfileName.value;
	profileName.title = editProfileName.value;
	profileDescription.textContent = editProfileDescription.value;
	profileDescription.title = editProfileDescription.value;
	popup.classList.remove("popup_opened");
});
popupClose.addEventListener("click", (event) => {
	event.preventDefault();
	popup.classList.remove("popup_opened");
})
