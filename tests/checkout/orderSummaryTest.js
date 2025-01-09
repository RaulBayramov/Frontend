import { renderCart } from '../../js_files/checkout/orderSummary.js'
import { cart, loadFromStorage } from '../../js_files/data/cart.js';
describe('test suite: renderCart', () => {
    beforeEach(() => {
        document.querySelector('.js-test-container').innerHTML = `
                <div class="js-video-grid-courses">Hello</div>
                <div class="js-paymant-summary"></div>
            `
        document.querySelector('.js-paymant-summary').innerHTML = `
                <h3 class="total">Total</h3>
                <div class="paymants">
                    <p class="net-price">0</p>
                    <p class="price">0</p>
                    <p class="off">0%</p>
                </div>`
        spyOn(localStorage, 'setItem')
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([
                {
                    courseId: '1234567890'
                },
                {
                    courseId: '1234567891'
                }
            ])
        })
        loadFromStorage();
        renderCart();
    })
    afterEach(() => {
        document.querySelector('.js-test-container').innerHTML = '';
    })
    it("displays the cart", () => {
        expect(document.querySelectorAll(".js-video-preview").length).toEqual(2);
    })
    it("delete button works as intended", () => {
        document.querySelector('.js-delete-link-1234567890').click();
        expect(document.querySelectorAll(`.js-video-preview`).length).toEqual(1)
        expect(document.querySelector('.js-video-preview-1234567890')).toEqual(null);
        expect(document.querySelector('.js-video-preview-1234567891')).not.toEqual(null);
        expect(cart.length).toEqual(1);
        expect(cart[0].courseId).toEqual('1234567891');
        document.querySelector('.js-delete-link-1234567891').click();
        expect(document.querySelectorAll(`.js-video-preview`).length).toEqual(0)
        expect(document.querySelector('.js-video-preview-1234567891')).toEqual(null);
    })
})
