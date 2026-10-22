const hamburger = document.querySelector('#hamburger');
const menuList = document.querySelector('#menu ul');

hamburger.addEventListener('click', () => {
    // Toggles the class: if it's there, remove it; if it's missing, add it
    menuList.classList.toggle('active');
    hamburger.classList.toggle('active');

    if (menuList.classList.contains('active')) {
        hamburger.innerText = '×';
    } else {
        hamburger.innerText = '☰';
    }
});

function closeMenu(){
    menuList.classList.remove('active');
    hamburger.classList.remove('active');
    if (menuList.classList.contains('active')) {
        hamburger.innerText = '×';
    } else {
        hamburger.innerText = '☰';
    }
}

// SERVICES HANDLER

const services = [
    {
        title:"SERVICE1",
        image:{
            url: "images/screenshot.png",
            alt: "Service Image 1"
        },
        paragraph:[
            "This is xyz bla bla bla stuff being spoken about.This is xyz bla bla bla stuff being spoken about.",
            "This is xyz bla bla bla stuff being spoken about.This is xyz bla bla bla stuff being spoken about.This is xyz bla bla bla stuff being spoken about.This is xyz bla bla bla stuff being spoken about.",
            "This is xyz bla bla bla stuff being spoken about."
        ],
        read:"#"
    },
    {
        title: "SERVICE2",
        image: {
            url: "images/image.png",
            alt: "Service Image 2"
        },
        paragraph: [
            "This is xyz bla bla bla stuff being spoken about.This is xyz bla bla bla stuff being spoken about.",
            "This is xyz bla bla bla stuff being spoken about.This is xyz bla bla bla stuff being spoken about.This is xyz bla bla bla stuff being spoken about.This is xyz bla bla bla stuff being spoken about.",
            "This is xyz bla bla bla stuff being spoken about."
        ],
        read: "#"
    },
    {
        title: "SERVICE3",
        image: {
            url: "images/image1.png",
            alt: "Service Image 3"
        },
        paragraph: [
            "This is xyz bla bla bla stuff being spoken about.This is xyz bla bla bla stuff being spoken about.",
            "This is xyz bla bla bla stuff being spoken about.This is xyz bla bla bla stuff being spoken about.This is xyz bla bla bla stuff being spoken about.This is xyz bla bla bla stuff being spoken about.",
            "This is xyz bla bla bla stuff being spoken about."
        ],
        read: "#"
    }
]

const leftTabs = document.querySelectorAll(".list-item-tab")
console.log(leftTabs)
let tabId = ""
const listItem = document.querySelector(".list-item")

leftTabs.forEach(tab=>{
    console.log(tab)
    tab.addEventListener('click',()=>{
        leftTabs.forEach(otherTabs => {
            otherTabs.classList.remove('active')
        })
        tab.classList.add("active")
        tabId = tab.id
        let service = services[tabId-1]

        let title = service.title
        let imageUrl = service.image.url
        let imageAlt = service.image.alt
        let par = service.paragraph
        let readLink = service.read

        let paragraph = ''
        par.forEach(p=>{
            paragraph +=`<div class="list-item-par">${p}</div>`
        })
        listItem.innerHTML = `
        <div class="list-item-title"><h2>${title}</h2></div>
        <div id="service-image">
            <img class="image" src="${imageUrl}" alt="${imageAlt}">
        </div>
        ${paragraph}
        <div class="btn read-btn">Explore</div>
        `
    })
})


const exploreBtn = document.querySelector(".read-btn")
const exploreSection = document.querySelector(".explore")
exploreBtn.addEventListener("click",()=>{
    console.log(exploreBtn)
    exploreSection.innerHTML = `
    <div class="explore-header">
        <h2>HEADING</h2>
        <p id="close-explore">×</p>
    </div>
    `
    exploreSection.style.display = "flex"
    const closeExplore = document.getElementById("close-explore")
    closeExplore.addEventListener("click",()=>{
        exploreSection.style.display = "none"
    })
})
