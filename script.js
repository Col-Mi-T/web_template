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

