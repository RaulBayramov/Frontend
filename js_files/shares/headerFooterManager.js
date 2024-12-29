import { cart } from "../data/cart.js";
class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <header>
        <div class="navbar">
            <div class="logo"><a href="./HomePage.html">eRBe</a></div>
            <ul class="links">
                <li><a href="./HomePage.html">Home</a></li>
                <li><a href="about_as.html">About</a></li>
                <li><a href="services">Services</a></li>
                <li><a href="contactForm.html">Contact</a></li>
            </ul>
            <div class="search-container">
                <input type="text" class="search-input" placeholder="Search...">
                <a href="#" class="search-button">
                    <i class="fas fa-search"></i>
                </a>
            </div>
            <div class="right-section">
                <a class="cart-link header-link" href="cart.html">
                    <img class="cart-icon" src="./images_/icons/cart-icon.png" alt="Cart Icon">
                    <div class="cart-quantity">${cart.length}</div>
                    <div class="cart-text">Cart</div>
                </a>
                <button class="login_button" role="button">Login</button>
            </div>
            <div class="toggle_btn"><i class="fa-solid fa-bars"></i></div>
        </div>
        <div class="dropdown_menu">
            <li><a href="./HomePage.html">Home</a></li>
            <li><a href="about_as.html">About</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="contactForm.html">Contact</a></li>
            <li><button class="button-35"><a href="page_of_login.html" class="action_btn">Login</a></button></li>
        </div>
    </header>
`;

    }
}
class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <footer>
        <div class="footer-content">
            <p>&copy; 2024 Education Platform. All rights reserved.</p>
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Use</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </footer>
`;

    }
}
customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);