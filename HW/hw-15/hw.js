const data = [
    { balance: 1000, purchases: 2, email: "email1@gmail.com" },
    { balance: 9000, purchases: 9, email: "email2@gmail.com" },
    { balance: 100, purchases: 7, email: "email3@gmail.com" },
    { balance: 4500, purchases: 1, email: "email4@gmail.com" }
];

// 1. Знайдіть користувача з балансом 100
// 2. Перевірте, чи ВСІ користувачі мають більше 1 purchase
// 3. Знайдіть всіх користувачів з балансом більше 100 та з покупками більше 2 

const userBalance = data.find((user) => user.balance === 100);
const userPurchase = data.every((user) => user.purchases > 1);
const userWithBalanceAndPurchase = data.find((user) => user.balance > 100 && user.purchases > 2);
console.log(userBalance);
console.log(userPurchase);
console.log(userWithBalanceAndPurchase);