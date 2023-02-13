(function () {

const wrap = document.querySelectorAll(".cb-image-grid__image")

if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
} else {
    wrap.forEach(el => {
        const zoom = el.querySelector(".xzoom")
        $(zoom).xzoom({ Xoffset: 30, lensOpacity: 1, lens: "rgba(33, 34, 34, 0.2)", zoomWidth: 600, zoomHeight: 600, defaultScale: -1});
    })
}

})()
