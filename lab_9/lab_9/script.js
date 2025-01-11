"use strict";

/* კლასი */

/* class Student {
  constructor(name, semester) {
    this.name = name;
    this.semester = semester;
  }

  studentInfo() {
    console.log(`Student ${this.name} is in ${this.semester} semeter`);
  }
}

//შევამოწმოთ სტუდენტ კლასის ტიპი
console.log("Type of class Student:", typeof Student); // შედეგი: function

//შევამოწმოთ დანმდვილაღ გვაქვს თუ არა პროტოტიპული მემკვიდრეობა
console.log(
  "Result of Student === Student.prototype.constructor:",
  Student === Student.prototype.constructor
); // შედეგი: true

//შევამოწმოთ მეთოდები პროტოტიპში
console.log(
  "Result of Student.prototype.studentInfo:",
  Student.prototype.studentInfo
); // შედეგი: ƒ studentInfo() { console.log(`Student ${this.name} is in ${this.semester} semeter`); }

//შევამოწმოთ რა მეთოდებია კლასის პროტოტიპში
console.log("Result of Student.prototype:", Student.prototype); // შედეგი: {constructor: ƒ, studentInfo: ƒ}
 */
/* Class Expression */
/* let User = class TestClass {
  sayHi() {
    console.log("In User", User);
    console.log("In User", TestClass);
  }
};

new User().sayHi(); */

/* console.log("User", User); */
/* console.log("User", TestClass);  *///ერორი ანახე */

/* getter და setter */
/* class Person {
  
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    if (newName.length < 3) {
      console.log("Name is too short.");
      return;
    }
    this._name = newName;
  }
}

let user = new Person("David");
console.log(user.name); //David

user = new Person(""); //Name is too short. */

/* მემკვიდრეობითობა კლასებში */

/* class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  walk() {
    console.log("walking on " + this.legs + " legs");
  }
}

class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }
  fly() {
    console.log("flying");
  }
}

let bird = new Bird(2);

bird.walk();
bird.fly(); */

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }
  run(speed) {
    this.speed = speed;
    console.log(`${this.name} runs with speed ${this.speed}.`);
  }
  stop() {
    this.speed = 0;
    console.log(`${this.name} has stoped.`);
  }
}

/* let animal = new Animal("Dog");

animal.run(2);
animal.stop(); */

//როცა კონსტრუქტორი არ აქვს შვილობილს
/* class Rabbit extends Animal {
  hide() {
    console.log(`${this.name} hides!`);
  }
} 
let rabbit = new Rabbit("White Rabbit");

rabbit.run(5);
rabbit.hide();

 */

//მშობელი კლასის მეთოდი და კონსტრუქტორი

/* class Rabbit extends Animal {
constructor(name, earLength) {
    this.speed = 0;
    this.name = name;
    this.earLength = earLength;
  }

 constructor(name, speed, earLength) {
    super(name, speed);
    this.earLength = earLength;
  }
  hide() {
    console.log(`${this.name} hides!`);
  }

  stop() {
    super.stop();
    this.hide();
  }
}

let rabbit = new Rabbit("White Rabbit", 10);
rabbit.run(5);
rabbit.stop(); */

/* სტატიკური თვისებები/properties და მეთოდები */

/* class Article {
  constructor(title, date) {
    this.title = title;
    this.date = date;
  }

  static createTodays() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = `${day}.${month}.${year}`;
    return new this("Today's digest", currentDate);
  }

  static compare(articleA, articleB) {
    return articleA.date - articleB.date;
  }
}

let article = Article.createTodays();
console.log(
  `${article.title} is the title of the article which was published on ${article.date}`
);

let articles = [
  new Article("HTML", new Date(2023, 12, 9)),
  new Article("CSS", new Date(2023, 12, 15)),
  new Article("JavaScript", new Date(2023, 12, 8)),
];

articles.sort(Article.compare);

console.log("compare", articles);
 */
/* Private და protected properties თვისებები*/

/* class CoffeeMachine {
  #waterLimit = 200;

  #fixWaterAmount(value) {
    if (value < 0) return 0;
    if (value > this.#waterLimit) return this.#waterLimit;
  }

  setWaterAmount(value) {
    this.#waterLimit = this.#fixWaterAmount(value);
  }

  waterAmount() {
    return this._waterAmount;
  }
}

let coffeeMachine = new CoffeeMachine();

coffeeMachine.#fixWaterAmount(123);
coffeeMachine.#waterLimit = 1000;
console.log(machine.#waterAmount); */

/* class CoffeeMachine1 {
  _waterAmount = 0;

  setWaterAmount(value) {
    if (value < 0) value = 0;
    this._waterAmount = value;
  }

  getWaterAmount() {
    return this._waterAmount;
  }
}

let coffeeMachine1 = new CoffeeMachine1();
coffeeMachine1._waterAmount = 25;
console.log(`Power is: ${coffeeMachine1.getWaterAmount()}W`); */

/* კლასის შემოწმება */

/* let toStringVar = Object.prototype.toString;

console.log(toStringVar.call(123)); // [object Number]
console.log(Object.prototype.toString.call(null)); // [object Null]
console.log(toStringVar.call(alert));
console.log(toStringVar.call(true)); */

/* callbacks */

// შეგიძლიათ აღწეროთ callback ცალკე
/* let myCallback = () => {
  console.log("Called!");
};

setTimeout(myCallback, 3000);
// თუმცა შესაძლებელია callback-ის აღწერა inline სახით
// როგორც მოცემულია ქვემოთ მაგალითზე
setTimeout(() => {
  console.log("Called!");
}, 3000);

console.log("This happens first!"); */

/* setTimeout(() => {
  console.log("First Callback!");
  setTimeout(() => {
    console.log("Second Callback!");
    setTimeout(() => {
      console.log("Third Callback!");
    }, 3000);
  }, 3000);
}, 3000); */

/* function importScriptFiles(src, callback) {
  let script = document.createElement("script");
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`Script import error for ${src}`));

  document.body.append(script);
}

importScriptFiles("script1.js", function (error, script) {
  if (error) {
    //handleError(error);
    console.error(error);
  } else {
    script1FileInfo();
    importScriptFiles("script2.js", function (error, script) {
      if (error) {
        console.error(error);
      } else {
        importScriptFiles("script3.js", function (error, script) {
          if (error) {
            console.error(error);
          } else {
            //რა მოხდეს ყველა სკრიპტის ფაილის გაშვების შემდეგ
          }
        });
      }
    });
  }
}); */

//ზემოთ მოცემული კოდის გამარტივებული მაგალითი
/* 
importScriptFiles("script1.js", step1);

function step1(error, script) {
  if (error) {
    console.error(error);
  } else {
    script1FileInfo();
    importScriptFiles("script2.js", step2);
  }
}

function step2(error, script) {
  if (error) {
    console.error(error);
  } else {
    importScriptFiles("script3.js", step3);
  }
}

function step3(error, script) {
  if (error) {
    console.error(error);
  } else {
    //რა მოხდეს ყველა სკრიპტის ფაილის გაშვების შემდეგ
  }
} */

/* Promises */
/* let success = true;

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (success) {
      resolve([
        { student: "Nino", email: "test@test.com" },
        { student: "Sandro", email: "test@test.com" },
      ]);
    } else {
      reject("Failed to the student list");
    }
  }, 1000);
});

promise
  .then((result) => console.log(result))
  .catch((err) => {
    console.error(`${err} 💥💥💥`);
  })
  .finally(() => {
    console.log(`finally`);
  });
 */
/* Promises chaining */
/* new Promise(function (resolve, reject) {
  setTimeout(() => resolve(100), 1000);
})
  .then(function (result) {
    console.log(result);
    return result / 2;
  })
  .then(function (result) {
    console.log(result);
    return result / 2;
  })
  .then(function (result) {
    console.log(result);
    return result / 2;
  }); */

/* Returning promises */
/* new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result);
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result * 2), 1000);
    });
  })
  .then(function (result) {
    console.log(result);
  }); */

/* fetch */
/* fetch("https://fakestoreapi.com/products")
  .then((res) => {
    console.log("res", res); //ანახე ჰედერები
    console.log("res.ok", res.headers.get("Content-Type")); //ანახე ჰედერები
    console.log("res.ok", res.ok); //true
    console.log("res.status", res.status); //200
    return res.json();
  })
  .then((json) => console.log(json)); */

/* fetch(`https://fakestoreapi.com/carts?sort=${'desc'}`)
  .then((res) => res.json())
  .then((json) => console.log(json)); */

/* fetch("https://fakestoreapi.com/carts/user/2")
  .then((res) => res)
  .then((json) => console.log(json));

fetch("https://fakestoreapi.com/carts", {
  method: "POST",
  body: JSON.stringify({
    userId: 5,
    date: "2020.02.03",
    products: [
      { productId: 5, quantity: 1 },
      { productId: 1, quantity: 5 },
    ],
  }),
})
  .then((res) => res.json())
  .then((json) => console.log("POST", json));

fetch("https://fakestoreapi.com/carts/7", {
  method: "PUT",
  body: JSON.stringify({
    userId: 3,
    date: 2019 - 12 - 10,
    products: [{ productId: 1, quantity: 3 }],
  }),
})
  .then((res) => res.json())
  .then((json) => console.log("PUT", json)); */

/* Async/await */

/* async function f() {
  return "ტესტ";
}

async function f() {
  return Promise.resolve("ტესტ");
}

f().then((res) => console.log(res)); */

/* async function asyncFunction() {
  let promise = await fetch("https://fakestoreapi.com/carts?sort=desc");

  let result = await promise.json();

  console.log(promise);
  console.log(result);
  return result;
}

asyncFunction();
asyncFunction().then((res) => console.log(res)); */

/* async function errorTest() {
  //let response = await fetch("https:");
  try {
    let response = await fetch("https://fakestoreapi.com/carts?sort=desc");
    let user = await response.json();
    return user;
  } catch (err) {
    console.error(err);
  }
}

errorTest(); */
//errorTest().catch((err) => console.error(err));
