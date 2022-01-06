const group = document.querySelector(".group");
const cardTemp = document.querySelector("#group__cards");
const cardContent = cardTemp.content;

function makeCard(link, name) {
    card = cardContent.cloneNode(true);
    card.querySelector('.group__image').src = link;
    card.querySelector('.group__name').textContent = name;
    return card;
}

function like(index){
    const elements = document.querySelectorAll(".group__like-icon")
    console.log(elements)
    elements[index].addEventListener("click", () => {
    if (elements[index].getAttribute("src") == "./images/like.svg"){
        elements[index].setAttribute("src", "./images/like-active.svg")
        elements[index].classList.add("group__like-icon_active")
    } else if (elements[index].getAttribute("src") == "./images/like-active.svg"){
        elements[index].setAttribute("src", "./images/like.svg")
        elements[index].classList.remove("group__like-icon_active")
    }
}
    )
}