import { header } from "./shares/header.js";
header();
function resize() {
    const row = document.querySelector(".row");
    const rowWidth = parseFloat(window.getComputedStyle(row).width); // "px" biriminden arındırıldı
    const marginLeftValue = (window.innerWidth - rowWidth) / 2;
    row.style.marginLeft = `${marginLeftValue}px`;
}
window.addEventListener('resize', resize)
window.addEventListener('load', resize)
