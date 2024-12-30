//codes for responsive header section
export function header() {
    const navbar = document.querySelector(".navbar");
    const toogleBtn = document.querySelector(".toggle_btn");
    const logo = document.querySelector(".logo");
    const searchContainer = document.querySelector(".search-container");
    const cart = document.querySelector(".right-section");
    const toogleBtnIcon = document.querySelector(".toggle_btn i");
    const dropDownMenu = document.querySelector(".dropdown_menu");
    const searchInput = document.querySelector('.search-input');

    //change places of elements when width <=992px
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
    window.addEventListener("load", rearangeElements);
    window.addEventListener("resize", rearangeElements);

    //when clicking toggle button change it width other symbol(= ->'X')
    toogleBtn.onclick = function () {
        dropDownMenu.classList.toggle("open");
        const isOpen = dropDownMenu.classList.contains("open");
        toogleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }

    // search-button:
    searchContainer.style.width = (window.innerWidth * 0.2) + 'px'
    function updateSearchInputWidth() {
        if (window.innerWidth <= 576) {
            searchContainer.style.width = (window.innerWidth * 0.2) + 'px';
        }
        else {
            searchContainer.style.width = (window.innerWidth * 0.25) + 'px';
        }
    }
    searchContainer.addEventListener('click', (event) => {
        if (window.innerWidth <= 992) {
            const screenWidth = window.innerWidth;
            searchContainer.style.width = screenWidth / 2 + 'px';
            logo.style.display = "none";
        }
    })
    searchContainer.addEventListener('mouseout', () => {
        logo.style.display = "block";
        updateSearchInputWidth()
    })
    window.addEventListener('load', updateSearchInputWidth);
    window.addEventListener('resize', updateSearchInputWidth);


    //when clicking login button open login page
    document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".login_button").addEventListener("click", function () {
            window.location.href = "page_of_login.html";
        });
    });

}
