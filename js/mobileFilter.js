(function () {

    const btnOpen = document.querySelector(".filter-open")
    const btnClose = document.querySelector(".filter-close")
    const filter = document.getElementById("filter")

    btnOpen.addEventListener("click", () => {
        filter.style.display = "block"
    })

    btnClose.addEventListener("click", () => {
        filter.style.display = "none"
    })
})()
