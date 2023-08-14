const body =  document.querySelector("body")
const header =  document.querySelector("header")
const navToggler =  document.querySelector(".nav-toggler")
const nav =  document.querySelector(".menu")
const noteTitles =  document.querySelectorAll(".note-title")
const toggler = document.querySelector(".theme-toggler")
const image = document.querySelectorAll(".en")
const lists = document.querySelectorAll(".about-switch .bar .list")
const aboutContainers = document.querySelectorAll(".about-switch .container")

 window.addEventListener("scroll",()=>{
    if (window.pageYOffset >= header.offsetTop + 1) {
        header.classList.add("fixed")
    }else{
        header.classList.remove("fixed")

    }
    console.log(document.body.scrollTop);
 })

lists.forEach(list =>{
    list.addEventListener("click", ()=>{
        let id = list.id
        for (let i = 0; i < lists.length; i++) {
            lists[i].classList.remove("active")
        }
        list.classList.add("active")

        aboutContainers.forEach(aboutContainer =>{
         aboutContainer.classList.remove("active")

            if (aboutContainer.classList.contains(id)) {
                aboutContainer.classList.add("active")
            }
        })
    })
 })

toggler.addEventListener("click" , () => {
   body.classList.toggle("dark")
    if (body.classList.contains("dark")) {
        image.forEach(img =>{
            img.src = img.dataset.two
        })
        
    }else{
        image.forEach(img =>{
            img.src = img.dataset.one
        })
    }
})

noteTitles.forEach(noteTitle =>{
    noteTitle.addEventListener("click",()=>{
        console.log(noteTitle);
        for (let i = 0; i < noteTitles.length; i++) {
           if ( !noteTitles[i].parentElement.classList.contains("active")) {
            noteTitles[i].parentElement.classList.remove("active")
           }
          
        }
        noteTitle.parentElement.classList.toggle("active")
        console.log( noteTitle.parentElement);
        })
})


navToggler.addEventListener("click",() => {
    nav.classList.toggle("active")
    navToggler.classList.toggle("active")
    // nav.classList.toggle("hide")
});

// AOS.init({
//     offset:     120,
//     delay:      0,
//     easing:     'ease',
//     duration:   400,
//     disable:    false, // Condition when AOS should be disabled. e.g. 'mobile'
//     once:       false,
//     mirror:     false, // whether elements should animate out while scrolling past them
//     startEvent: 'DOMContentLoaded'
//   });
// for (let i = 0; i < noteTitles.length; i++) {
//     noteTitles[i].addEventListener("click",()=>{
//         console.log(noteTitles[i]);
//     })
// }