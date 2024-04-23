import { faker } from "https://esm.sh/@faker-js/faker";
const {  person, location, image, helpers, internet, random, database } = faker;
console.log(faker, "faker");

class Faker {
  static generateUsers = (amount = 10) => {
    const users = [];

    for (let i = 0; i < amount; i++) {
      const user = {
        id: database.mongodbObjectId(),
        name: person.firstName(),
        surname: person.lastName(),
        age: +random.numeric(2) + 10,
        city: location.city(),
        salary: +random.numeric() * 1000,
        bio: person.bio(),
        avatar: image.avatar(),
        email: internet.email(),
        skills: helpers.arrayElements([
          "html",
          "css",
          "javascript",
          "react",
          "angular",
          "jquery",
          "axios",
        ]),
      };
      users.push(user);
    }

    return users;
  };
}

let users = Faker.generateUsers(100);

console.log(users, "users");

class UserViews {
  static renderInitials = (user, parent) => {
    const card = document.createElement("div");
    card.classList.add("user-initials");
    card.textContent = `${user.name} ${user.surname}`;

    parent.appendChild(card);
  };

  static renderCard = (user, parent, actions = {}) => {
    const { name, surname, age, salary, avatar, skills, bio, email, id } = user;

    const card = document.createElement("div");
    card.classList.add("user-card");

    card.innerHTML = `
    <div class="content">
        <img alt="${name}" src="${avatar}" />
        <article>
            <h4>${name} ${surname}</h4>
            <p>${email}</p>

            <div class="box">
                <div class="box-item">Age: ${age}</div>
                <div class="box-item">Salary: ${salary}</div>
            </div>

            <div class="box inline">
            ${skills
              .map((skill) => `<div class="box-item">${skill}</div>`)
              .join("")}
                
            <div>
        </article>
    </div>
    `;

    // buttons
    const ButtonsWrapper = document.createElement("div");
    ButtonsWrapper.classList.add("user-card-actions");

    const removeUserButton = document.createElement("button");
    removeUserButton.textContent = "Delete user";
    removeUserButton.onclick = () => actions.delete(id);
    ButtonsWrapper.appendChild(removeUserButton);

    card.appendChild(ButtonsWrapper);
    parent.appendChild(card);
  };
}

class App {

  static addUser() {
    let newUser = Faker.generateUsers(1)[0];
    users.push(newUser);
    console.log(users, "addUser")
    App.renderUsers(users, document.body);
  }
  static removeUser(id) {
    // Завдання: написати логіку що видаляє користувача за id
    users = users.filter((user) => user.id !== id);
    console.log(users, "remove");
    App.renderUsers(users);
  }
  static changeUser() {}

  static renderUsers(usersToRender = [], parent = document.body) {
    parent.innerHTML = "";

    usersToRender.forEach((user) => {
      UserViews.renderCard(user, parent, { delete: App.removeUser });
    });
  }
}

App.renderUsers(users);

const addButton = document.createElement("button");
addButton.textContent = "Add User";
addButton.onclick = App.addUser;
document.body.appendChild(addButton);
