function renderInitialCards() {
  initialCards.forEach((cardData) => {
      makeCard(cardData.link, cardData.name);
    }
  )
}
renderInitialCards();
