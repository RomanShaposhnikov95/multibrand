(function () {

    const btnOpen = document.querySelector(".filter-open")
    const btnClose = document.querySelector(".filter-close")
    const filter = document.getElementById("filter")
    const overlay = document.getElementById("overlay")

    btnOpen.addEventListener("click", () => {
        filter.style.display = "block"
        overlay.style.display = "block"
        document.body.style.overflowY = "hidden";
    })

    btnClose.addEventListener("click", () => {
        filter.style.display = "none"
        overlay.style.display = "none"
        document.body.style.overflowY = "auto";
    })

    overlay.addEventListener("click", () => {
        filter.style.display = "none"
        overlay.style.display = "none"
        document.body.style.overflowY = "auto";
    })


})()
