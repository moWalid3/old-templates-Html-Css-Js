const navBar = document.querySelector("nav");
const navBarOffsetTop = navBar.offsetTop;
const sections = document.querySelectorAll("section");
const navBarLink = document.querySelectorAll(".navbarlinks");

window.addEventListener("scroll", () => {
  if (window.pageYOffset >= navBarOffsetTop) {
    navBar.classList.add("styke");
  } else {
    navBar.classList.remove("styke");
  }
});

sections.forEach((item, i) => {
  if (window.pageYOffset >= item.offsetTop - 10) {
    navBarLink.forEach(item => {
        item.classList.remove("change")
    });
    navBarLink[i].classList.add("change");
  }
});

