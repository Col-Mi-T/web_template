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
            url: "images/ screenshot.png",
            alt: "Service Image"
        },
        paragraph:"Stuff",
        read:"#"
    },
    {
        title: "SERVICE2",
        image: {
            url: "images/ screenshot.png",
            alt: "Service Image"
        },
        paragraph: "Stuff",
        read: "#"
    },
    {
        title: "SERVICE3",
        image: {
            url: "images/ screenshot.png",
            alt: "Service Image"
        },
        paragraph: "Stuff",
        read: "#"
    }
]

const leftTabs = document.querySelectorAll(".list-item-tab")
console.log(leftTabs)
let tabId = ""
const listItem = document.querySelector(".list-item")
const listTitle = document.querySelector(".list-item-title")
const listImage = document.querySelector(".image")
const readBtn = document.querySelector(".read-btn")


leftTabs.forEach(tab=>{
    console.log(tab)
    tab.addEventListener('click',()=>{
        leftTabs.forEach(otherTabs => {
            otherTabs.classList.remove('active')
        })
        tab.classList.add("active")
        tabId = tab.id
        let service = services[tabId-1]
        //console.log(service)
        
    })
})
