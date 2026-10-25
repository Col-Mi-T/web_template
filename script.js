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
        explore:{
            sections:[
                {
                    title:"Section 1",
                    paragraph:[
                        "stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff",
                        "stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff",
                        "stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff",
                    ],
                    image:{
                        url:"images/screenshot.png",
                        alt:"section image"
                    }
                },
                {
                    title: "Section 2",
                    paragraph: "stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff",
                    image: {
                        url: "images/screenshot.png",
                        alt: "section image"
                    }
                },
                {
                    title: "Section 3",
                    paragraph: "stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff",
                    image: {
                        url: "images/screenshot.png",
                        alt: "section image"
                    }
                }
            ]
        }
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
        explore: {
            sections: [
                {
                    title: "Section 1",
                    paragraph: [
                        "stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff",
                        "stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff",
                        "stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff",
                    ],
                    image: {
                        url: "images/screenshot.png",
                        alt: "section image"
                    }
                },
                {
                    title: "Section 2",
                    paragraph: "stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff",
                    image: {
                        url: "images/screenshot.png",
                        alt: "section image"
                    }
                },
                {
                    title: "Section 3",
                    paragraph: "stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff",
                    image: {
                        url: "images/screenshot.png",
                        alt: "section image"
                    }
                }
            ]
        }
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
        explore: {
            sections: [
                {
                    title: "Section 1",
                    paragraph: [
                        "stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff",
                        "stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff",
                        "stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff",
                    ],
                    image: {
                        url: "images/screenshot.png",
                        alt: "section image"
                    }
                },
                {
                    title: "Section 2",
                    paragraph: "stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff",
                    image: {
                        url: "images/screenshot.png",
                        alt: "section image"
                    }
                },
                {
                    title: "Section 3",
                    paragraph: "stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff stuff stuff stuff stuff stuff stuffstuff stuff stuffstuff stuff stuffstuff stuff stuff",
                    image: {
                        url: "images/screenshot.png",
                        alt: "section image"
                    }
                }
            ]
        }
    }
]

const leftTabs = document.querySelectorAll(".list-item-tab")
console.log(leftTabs)
let tabId = ""
const listItem = document.querySelector(".list-item")
let service = services[0]

let title = service.title
let imageUrl = service.image.url
let imageAlt = service.image.alt
let par = service.paragraph

let paragraph = ''
par.forEach(p => {
    paragraph += `<div class="list-item-par">${p}</div>`
})
listItem.innerHTML = `
        <div class="list-item-title"><h2>${title}</h2></div>
        <div id="service-image">
            <img class="image" src="${imageUrl}" alt="${imageAlt}">
        </div>
        ${paragraph}
        <div class="btn" id="read-btn">Explore</div>
        `

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
        <div class="btn" id="read-btn">Explore</div>
        `
        openExplore(service)
    })
})

function openExplore(service){
    console.log(service)
    const exploreBtn = document.getElementById("read-btn")
    const exploreSection = document.querySelector(".explore")
    exploreBtn.addEventListener("click", () => {
        console.log(exploreBtn)

        let section = ""

        service.explore.sections.forEach(s=>{
            section +=`<h2 class="explore-subheading">${s.title}</h2>
            <p class="explore-paragraph">${s.paragraph}</p>
            <img class="image section-image" src="${s.image.url}" alt="${s.image.alt}">
`
        })
        exploreSection.innerHTML = `
        <div class="explore-header">
            <h1>${service.title}</h1>
            <p id="close-explore">×</p>
        </div>
        <div class="explore-body">
            <img class="image explore-image" src="${service.image.url}" alt="${service.image.alt}"></img>
            
            ${section}
        </div>
        <div class="explore-footer">Thank you for exploring!</div>
        `
        exploreSection.style.display = "flex"
        const closeExplore = document.getElementById("close-explore")
        closeExplore.addEventListener("click", () => {
            exploreSection.style.display = "none"
        })
    })
}

openExplore(service)