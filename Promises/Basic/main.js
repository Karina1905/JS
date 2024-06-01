// Threads

// Event Loop

// Call Stack

console.log(1);
console.log(11);

// Delayed tasks

// await

// Promise (resolved (fulfilled), rejected, processing(pending))

const promise = new Promise((resolve, reject) => {
  const message = "Hello from promise";
  console.log(message);

  setTimeout(() => {
    resolve(message);
  }, 3000);
});
console.log(111);

console.log(promise, "promise");

promise.then((data) => {
  console.log(data, "data!!!!!");
});

const promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve(data);
  }, 1000);
});
promise1.then((coordinates) => {
  console.log(coordinates);
});
const data = {
  latitude: 123234351,
  longitude: 220342313,
};

// Завдання:
// Опишіть логіку створення Promise,
// що через секунду повертає дані координат (resolve)
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(data);
//   }, 1000);
// });
// promise2.then((coordinates) => {
//   console.log(coordinates);
// });

// Promise.race;
// Promise.all;

const prom1 = new Promise((res) => {
  setTimeout(() => res("first"), 4000);
});

const prom2 = new Promise((res) => {
  setTimeout(() => res("second"), 5000);
});

const prom3 = new Promise((res) => {
  setTimeout(() => res("third"), 3000);
});

const prom4 = new Promise((resolve, reject) => {
  reject("The error text");
});

Promise.all([prom1, prom2, prom3]).then((results) =>
  console.log(results, "results")
);

Promise.race([prom1, prom2, prom3]).then((order) =>
  console.log(order, "order")
);

class Car {
  constructor(name, color, speed) {
    this.name = name;
    this.color = color;
    this.speed = speed;
  }

  race() {
    const result = Math.floor(Math.random() * (4000 - this.speed));

    return new Promise((res) => {
      setTimeout(() => {
        res(
          `The car: ${this.name} has finised in: ${result} with speed: ${this.speed}`
        );
      }, result);
    });
  }
}

const cars = [
  new Car("Dodge Charger", "black", 250),
  new Car("Toyota GT", "blue", 210),
  new Car("Ford Mustang", "red", 260),
];

const racePromises = cars.map((car) => car.race());

Promise.race(racePromises).then((res) => console.log(res));

Promise.all(racePromises).then((results) => {
  results.forEach((result) => {
    console.log(result);
  });
});

Promise.allSettled([prom1, prom2, prom3, prom4]).then((data) => {
  console.log(data, "data");
  const fulfilledpromises = data.filter(
    (promise) => promise.status === "fulfilled"
  );
  console.log(fulfilledpromises, "fulfilledPromises");
});

const rejectPromise = new Promise((res, rej) => {
  const randValue = Math.floor(Math.random() * 10);

  setTimeout(() => {
    if (randValue % 2 === 0) {
      res("P");
    } else {
      rej("N");
    }
  }, 2000);
});

// resolve - then
// reject - catch

rejectPromise
  .then((something) => console.log(something, "something"))
  .catch((err) => console.log(err, "err"));


  // HW
const user = {
  name: "Oleg",
  age: 26,
  position: "Middle web Developer",
};
const promiseUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(user);
  }, 3000);
})
  .then((info) => {
    console.log(info);
    localStorage.setItem("user", JSON.stringify(info));
  })
  .catch((err) => console.log(err));

const promiseError = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject();
  }, 3000);
});

promiseError.catch((err) => {
  console.log(err);
});
