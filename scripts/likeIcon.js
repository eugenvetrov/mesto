const likeIcon = document.querySelectorAll(".group__like-icon");
Array.from(likeIcon).forEach((element, i) => {
    likeIcon[i].addEventListener("click", (event) => {
        if (likeIcon[i].getAttribute("src") == "./images/like.svg"){
            likeIcon[i].setAttribute("src", "./images/like-active.svg");
            likeIcon[i].classList.add("group__like-icon_active");
        } else if (likeIcon[i].getAttribute("src") == "./images/like-active.svg") {
            likeIcon[i].setAttribute("src", "./images/like.svg");
            likeIcon[i].classList.remove("group__like-icon_active");
        }
    }
    );
    }
);