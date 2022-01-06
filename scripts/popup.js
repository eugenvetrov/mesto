function openPopup(kindOfPopup) {
	kindOfPopup.classList.add("popup_opened");
}

function closePopup (kindOfPopup) {
	kindOfPopup.classList.remove("popup_opened");
}

function profilePopup() {

    const editButton = document.querySelector(".profile__info-edit");
    const popupProfile = document.querySelectorAll(".popup")[0];
    const profileEditSubmit = document.querySelectorAll(".popup__form")[0];
    const editProfileName = document.querySelectorAll(".popup__text:nth-of-type(1)")[0];
    const editProfileDescription = document.querySelectorAll(".popup__text:nth-of-type(2)")[0];
    const profileName = document.querySelectorAll(".profile__info-name")[0];
    const profileDescription = document.querySelectorAll(".profile__info-description")[0];
    const popupCloseProfile = document.querySelectorAll(".popup__close-icon")[0];

    function openProfilePopup() {
    	openPopup(popupProfile);
    	editProfileName.value = profileName.textContent;
    	editProfileDescription.value = profileDescription.textContent;
    }
    
    function closePopupProfile() {
    	closePopup(popupProfile);
    }
    
    const editProfilePopup = (event) => {
    	event.preventDefault();
        profileName.textContent = editProfileName.value
    	profileDescription.textContent = editProfileDescription.value
    	closePopup(popupProfile);
    }
    
        editButton.addEventListener("click", openProfilePopup);
        profileEditSubmit.addEventListener("submit", editProfilePopup);
        popupCloseProfile.addEventListener("click", closePopupProfile);

}

function cardPopup() {

	const addButton = document.querySelector(".profile__add");
	const popupCard = document.querySelectorAll(".popup")[1];
	const cardAddSubmit = document.querySelectorAll(".popup__form")[1];
	const cardName = document.querySelectorAll(".popup__text:nth-of-type(1)")[1];
	const cardLink = document.querySelectorAll(".popup__text:nth-of-type(2)")[1];
	const popupCloseCard = document.querySelectorAll(".popup__close-icon")[1];

    function openCardPopup() {
		openPopup(popupCard);
	}

	function closePopupCard() {
		closePopup(popupCard);
	}

	function addCard(event) {
		event.preventDefault();
		newItem = {
			name: cardName.value, 
			link: cardLink.value
		}
		initialCards.unshift(newItem);
		group.prepend(makeCard(initialCards[0].link, initialCards[0].name));
		like(0)
		closePopupCard();
	}

	addButton.addEventListener("click", openCardPopup);
    popupCloseCard.addEventListener("click", closePopupCard);
    cardAddSubmit.addEventListener("submit", addCard);
}

profilePopup();
cardPopup();
