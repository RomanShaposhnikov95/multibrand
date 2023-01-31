const headerTop = document.querySelector('.header-top');
const headerBottom = document.querySelector('.header-bottom');
const navBar = document.querySelector('.navbar-nav');


document.addEventListener("scroll", (event) => {
    if (headerTop.clientHeight <= window.pageYOffset) {
        headerBottom.style.position = "fixed"
        document.body.style.marginTop = `${headerBottom.clientHeight}px`
    } else {
        headerBottom.style.position = "static"
        document.body.style.marginTop = `0`
    }
})


let dropdownElementList = [].slice.call(document.querySelectorAll('.menu-open'))
let dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
    dropdownToggleEl.addEventListener('shown.bs.dropdown', function () {
        changeStyle()
    })

    dropdownToggleEl.addEventListener('hidden.bs.dropdown', function () {
        changeStyle()
    })
})

const changeStyle = () => {
    if (navBar.getElementsByClassName('show').length > 0) {
        headerBottom.style.paddingBottom = `58px`
    } else {
        headerBottom.style.paddingBottom = `0`
    }
}


const search = document.querySelector('.search');
const searchOpen = document.querySelector('.search-open');
const searchClose = document.querySelector('.search-close');

searchClose.addEventListener("click", () => {
    search.classList.remove("show")
    searchOpen.classList.remove("show")
    searchOpen.setAttribute("aria-expanded", "false");
})



const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navbar');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(menuOpen && menuBtn.classList.contains('collapsed')) {
        menuBtn.classList.remove('open');
        menuOpen = false;

    } else {
        menuBtn.classList.add('open');
        menuOpen = true;
    }
});




const menu = document.querySelector(".navbar-collapse")

document.addEventListener("mouseup", function(event) {
    let obj = document.getElementById("navbarText");
    if (!obj.contains(event.target) && !menuBtn.contains(event.target) ) {
        console.log("Outside click detected!");
        menu.classList.remove('show');
        menuBtn.classList.remove('open');
        menuBtn.setAttribute("aria-expanded", "false");
    }
});
