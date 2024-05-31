

const openNav=document.querySelector(".container-open-nav")
const navBar=document.querySelector("nav")
const closeNav=document.querySelector(".container-close-nav")
    
openNav.addEventListener("click",(eo) => {
        navBar.classList.toggle("show-nav")
    }
    )

closeNav.addEventListener("click",(eo) => {
    navBar.classList.toggle("show-nav")
    
}
)





// section-5



const section5=document.querySelector(".section-5")
const allImg=document.querySelectorAll(".scale-img")



let i=1
      setInterval(() => {
          
              const classremove=document.querySelector(".change")

                classremove.classList.remove("change")
              i++

              if (i>allImg.length) {
                allImg[0].classList.add("change")
                i=1
              }else{
                classremove.nextElementSibling.classList.add("change")
                  
              }



      }, 3000);







