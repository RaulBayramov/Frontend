//codes for responsive header section
export function header() {
    const navbar = document.querySelector(".navbar");
    const toogleBtn = document.querySelector(".toggle_btn");
    const logo = document.querySelector(".logo");
    const searchContainer = document.querySelector(".search-container");
    const cart = document.querySelector(".right-section");
    function rearangeElements() {
        const links = document.querySelector(".links");
        if (window.innerWidth <= 992) {
            navbar.insertBefore(searchContainer, cart);
            navbar.insertBefore(toogleBtn, logo);
        }
        else {
            navbar.insertBefore(logo, links);
        }
    }
    const toogleBtnIcon = document.querySelector(".toggle_btn i");
    const dropDownMenu = document.querySelector(".dropdown_menu");
    toogleBtn.onclick = function () {
        dropDownMenu.classList.toggle("open");
        const isOpen = dropDownMenu.classList.contains("open");
        toogleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
    window.addEventListener("load", rearangeElements);
    window.addEventListener("resize", rearangeElements);

    // search-button:
    const searchInput = document.querySelector('.search-input');
    searchInput.style.width = (window.innerWidth * 0.2) + 'px'
    function updateSearchInputWidth() {
        if (window.innerWidth <= 576) {
            searchInput.style.width = (window.innerWidth * 0.2) + 'px';
        }
        else {
            searchInput.style.width = (window.innerWidth * 0.25) + 'px';  // Pencere genişliğinin %20'si
        }

    }
    searchContainer.addEventListener('mouseover', () => {
        if (window.innerWidth <= 992) {
            logo.style.display = "none";
            toogleBtn.style.marginRight = "1rem"
            cart.style.marginLeft = "1rem"
            searchInput.style.width = (window.innerWidth * 0.3) + 'px';  // Pencere genişliğinin %50'si

        }
    })
    searchContainer.addEventListener('mouseout', (button) => {
        if (window.innerWidth <= 992) {
            logo.style.display = "block";
            logo.style.marginRight = "1rem"
            searchInput.style.width = (window.innerWidth * 0.2) + 'px';
            updateSearchInputWidth();
        }
    })
    window.addEventListener('load', updateSearchInputWidth);

    // Pencere boyutu değiştiğinde (responsive)
    window.addEventListener('resize', updateSearchInputWidth);
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".login_button").addEventListener("click", function () {
            window.location.href = "page_of_login.html";
        });
    });

}
