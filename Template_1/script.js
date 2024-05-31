const buttonCard=document.querySelectorAll(".button-card")
buttonCard.forEach(item => {
    item.addEventListener("click",(eo) => {
        item.parentElement.parentElement.classList.toggle("change")
    }
    )
});

// nav-bar
const iconOpenNav=document.querySelector("nav")
const containerContentNav=document.querySelector(".container-content-nav-bar")
const containerIconClose=document.querySelector(".container-icon-close")



iconOpenNav.addEventListener("click",(eo) => {
    containerContentNav.classList.toggle("show-content")
    containerIconClose.style.opacity="1"
    containerIconClose.style.visibility="visible"
}
)
containerIconClose.addEventListener("click",(eo) => {
    containerContentNav.classList.toggle("show-content")

    
}
)















