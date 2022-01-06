function renderInitialCards() {
  initialCards.forEach((cardData, index) => {
      group.append(makeCard(cardData.link, cardData.name));
      like(index)
    }
  )
}
renderInitialCards();
