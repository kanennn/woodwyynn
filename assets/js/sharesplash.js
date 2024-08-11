var splash = document.getElementById("sharebutton")
var normal = splash?.textContent || splash?.innerText
var clicked = "link copied!"
splash?.addEventListener("click", hide)

function hide() {
    if (splash && clicked) {
        splash.textContent = clicked
        splash.classList.add("clicked")
    }
    setTimeout(unhide, 10000)
}
function unhide() {
    if (splash && normal) {
        splash.textContent = normal
        splash.classList.remove("clicked")
    }
}
