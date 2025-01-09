import { cart } from "../data/cart.js";
import { formatCurrency } from "../utils/formatCurrency.js";
import { courses } from "../data/data.js";
export function renderPaymantSummary() {
    const paymantSummary = document.querySelector('.js-paymant-summary');

    paymantSummary.style.display = 'block';
    let netPrice = 0;
    cart.forEach((cartItem) => {
        let matchCourse = courses.find((course) => course.id === cartItem.courseId);
        netPrice += matchCourse.price;
    })
    document.querySelector('.net-price').innerHTML = formatCurrency(netPrice) !== 'Free' ? formatCurrency(netPrice) : '0';
    document.querySelector('.price').innerHTML = formatCurrency(netPrice) !== 'Free' ? formatCurrency(netPrice) : '0';
    document.querySelector('.off');
}
