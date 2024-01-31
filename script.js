window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar() {
    const htmlElement = document.documentElement;
    const percent = htmlElement.scrollTop / htmlElement.clientHeight;
    console.log(Math.min(percent * 100, 100))
    htmlElement.style.setProperty("--scroll", Math.min(percent * 100, 100))
}

setScrollVar()

