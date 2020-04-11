window.addEventListener("scroll", function () {
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrolly > 0);
})
function toggle() {
    var header = document.querySelector("header");
    header.classList.toggle("active");
}