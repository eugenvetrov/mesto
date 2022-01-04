const group = document.querySelector(".group");
const cardTemp = document.querySelector("#group__cards");
const cardContent = cardTemp.content;
function makeCard(link, name) {
    card = cardContent.cloneNode(true);
    card.querySelector('.group__image').src = link;
    card.querySelector('.group__name').textContent = name;
    group.append(card);
}