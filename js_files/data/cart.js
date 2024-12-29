
export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
    cart = [
        { courseId: "1234567890" }
    ]
}
function addedMesageFunc(courseId) {
    const addedMesage = document.querySelector(`.js-added-to-card-${courseId}`);
    addedMesage.style.opacity = 1;
    setTimeout(() => {
        addedMesage.style.opacity = 0;
    }, 2000)
}
export function addToCart(courseId) {
    let matchItem;
    addedMesageFunc(courseId);
    cart.forEach((cartItem) => {
        if (cartItem.courseId === courseId) {
            matchItem = cartItem
        }
    })
    if (!matchItem) {
        cart.push({
            courseId: courseId
        });
    }
    console.log(cart);
    saveToStorage();
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