function deleteCard() {
    const trashIcons = document.querySelectorAll(".group__delete-icon");
    const renderedCards = document.querySelectorAll(".group__rectangle");
    const cardList = Array.prototype.slice.call(renderedCards)
    console.log(renderedCards)
    trashIcons.forEach((item, i) => {
        console.log(trashIcons[i])
        trashIcons[i].addEventListener("click", (i) => {
            console.log(trashIcons[i])
            const removed = cardList.splice(i, 1)
        }
            );
    })
}

deleteCard();