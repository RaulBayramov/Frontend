
export let cart;
loadFromStorage();
export function loadFromStorage() {
    cart = JSON.parse(localStorage.getItem('cart'));
    if (!cart) {
        cart = [
            { courseId: "1234567890" }
        ]
    }
}
export function addedMesageFunc(courseId) {
    const addedMesage = document.querySelector(`.js-added-to-cart-${courseId}`);
    if (!addedMesage) {
        console.log('addedmesage === nul');
        return;
    }
    addedMesage.style.opacity = 1;
    setTimeout(() => {
        addedMesage.style.opacity = 0;
    }, 2000)
}
export function addToCart(courseId) {
    let matchItem;
    cart.forEach((cartItem) => {
        if (cartItem.courseId === courseId) {
            matchItem = cartItem;
        }
    })
    if (!matchItem) {
        cart.push({
            courseId: courseId
        });
    }
    console.log(cart);
    saveToStorage();
    addedMesageFunc(courseId); // courseId'yi burada doğru şekilde geçirdiğinizden emin olun.
}
export function removeFromCart(courseId) {
    const newCart = [];
    cart.forEach((course) => {
        if (course.courseId !== courseId) {
            newCart.push(course);
        }
    })
    cart = newCart;
    saveToStorage();
}

export function saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}