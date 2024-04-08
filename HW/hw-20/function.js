const data1 = {
    users: [{ email: "email1@gmai.com" }, { email: "email2@gmail.com" }],
    addUser: function (user) {
        // допишіть логіку додавання користувача
           this.users.push(user)
    }
}

const data2 = {
    users: []
}

data2.addUser = data1.addUser.bind(data2);
data2.addUser({email: "email3@gmai.com" });
data1.addUser.apply(data2, [{email: "email4@gmai.com"}]);
data1.addUser.call(data2, {email: "email5@gmai.com"});

console.log(data1);
console.log(data2);


// "Навчіть" data2 додавати користувачів 3 способами (bind, call, apply)