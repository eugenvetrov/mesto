function renderInitialCards() {
  initialCards.forEach((cardData) => {
      group.append(makeCard(cardData.link, cardData.name));
    }
  )
}
renderInitialCards();
