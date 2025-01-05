import { addToCart, cart, loadFromStorage } from '../../js_files/data/cart.js'

describe("Test addToCart function", () => {
    it("adds an existing course to the cart:", () => {
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([{
                courseId: '1234567890'
            }]);
        })
        loadFromStorage();
        addToCart('1234567890');
        expect(cart.length).toEqual(1);
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].courseId).toEqual('1234567890');
    })
    it("adds the new course to the cart: ", () => {
        spyOn(localStorage, 'setItem');
        spyOn(localStorage, 'getItem').and.callFake(() => {
            return JSON.stringify([]);
        })
        loadFromStorage();
        console.log(localStorage.getItem('cart'));
        addToCart('1234567890');
        expect(cart.length).toEqual(1);
        //expect(localStorage.setItem.calls.count()).toBe(1); benzer kullanim
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].courseId).toEqual('1234567890');
    })
})
