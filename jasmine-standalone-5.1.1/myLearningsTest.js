import { renderCart } from '../js_files/my_learning.js'
import { cart, loadFromStorage } from '../js_files/data/cart.js';
describe('test suite: renderCart', () => {
    it("displays the cart", () => {
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
        expect(document.querySelectorAll(".js-video-preview").length).toEqual(2);
    })
    it("delete button works as intended", () => {
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
        document.querySelector('.js-delete-link-1234567890').click();
        expect(document.querySelector(`js-video-preview-${'1234567890'}`)).toEqual(null)
        document.querySelector('.js-delete-link-1234567891').click();
        expect(document.querySelector(`js-video-preview-${'1234567891'}`)).toEqual(null)
    })
})