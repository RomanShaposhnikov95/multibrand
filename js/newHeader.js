const headerTop = document.querySelector('.header-top');
const headerBottom = document.querySelector('.header-bottom');
const navBar = document.querySelector('.navbar-nav');

const overlay = document.querySelector('.overlay');



document.addEventListener("scroll", (event) => {
    if (headerTop.clientHeight <= window.pageYOffset) {
        headerBottom.style.boxShadow = "0 8px 16px 0 rgba(0,0,0,0.1)"
    } else {
        headerBottom.style.boxShadow = "unset"
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
        headerBottom.style.paddingBottom = `49px`
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
    overlay.classList.add("d-none")
})

searchOpen.addEventListener("click", () => {
    overlay.classList.remove("d-none")
})

overlay.addEventListener("click", () => {
    overlay.classList.add("d-none")
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
