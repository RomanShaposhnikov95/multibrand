const wrap = document.querySelectorAll(".cb-image-grid__image")


wrap.forEach(el => {
    const zoom = el.querySelector(".xzoom")


    $(zoom).xzoom({ Xoffset: 15, lensOpacity: 1, lens: "rgba(33, 34, 34, 0.2)"});
})
