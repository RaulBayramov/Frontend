'use strict'
function Entity() {

}
Entity.prototype.brief = function () {
    console.log("brief");
}
function Animal() {

}
Animal.prototype = Object.create(Entity.prototype);
Animal.prototype.speak = function () {
    console.log("Animal");
}
Animal.prototype.constructor = Animal;
function Dog() {
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
let dog = new Dog();
dog.speak();
dog.brief();
Animal.call
