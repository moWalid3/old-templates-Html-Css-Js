// change imgs in section two
const continerimgsection2 = document.querySelector(".continer-img-section-2");
const allimgsection2 = document.querySelectorAll(".img-section-2");

let i = 1;
setInterval(() => {
  const classremove = document.querySelector(".change");

  classremove.classList.remove("change");
  i++;

  if (i > allimgsection2.length) {
    allimgsection2[0].classList.add("change");
    i = 1;
  } else {
    classremove.nextElementSibling.classList.add("change");
  }
}, 3000);

// spocial for enter email
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const input = document.getElementById("email");
const icontrue = document.getElementById("icontrue");

input.addEventListener("keyup", (eo) => {
  const regEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regEmail.test(eo.target.value)) {
    eo.target.classList.remove("eror");
    icontrue.style.visibility = "visible";
  } else {
    eo.target.classList.add("eror");
    icontrue.style.visibility = "hidden";
  }
});

// special for nav
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

const iconclick = document.getElementById("i");
const nav = document.getElementsByClassName("navbar")[0];

iconclick.addEventListener("click", (eo) => {
  nav.classList.toggle("target");

  eo.target.classList.toggle("icon-dowen");
});
