// Promise
Promise;

new Promise((res, rej) => {
  console.log("Promise");
  rej("rejected");
  res("Hello");
})
  .then((result) => console.log(result))
  .catch((err) => console.log(err))
  .finally(() => console.log("finally"));

// fetch
// JSON
// Application/json

function renderUsers(users) {
  users.forEach((user) => {
    const { email, name, id, phone, username, website } = user;

    document.body.innerHTML += `<div>
        <h4>${name}</h4>
        <p>${email}</p>
        <p>${phone}</p>
      </div>
      `;
  });
}

fetch("https://jsonplaceholder.typicode.com/users", {})
  .then((response) => response.json())
  .then((dataFromJson) => {
    console.log(dataFromJson, "dataFromJson");
    localStorage.setItem("dataFromServer", JSON.stringify(dataFromJson));
  })
  .catch((err) => {
    console.log(err);
  });

fetch(" https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((todos) => console.log(todos, "todos"))
  .catch((err) => console.log(err, "err"));
// https://jsonplaceholder.typicode.com/

fetch("https://jsonplaceholder.typicode.com/comments", {})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

function renderComments(comments) {
  comments.forEach((comment) => {
    const { body, email, id, name, postId } = comment;

    document.body.innerHTML += `<div>
          <h4>${name}</h4>
          <p>${email}</p>
          <p>${body}</p>
          <p>${id}</p>
        </div>`;
  });
}

// Requests variations
// GET
// POST
// PATCH
// PUT
// DELETE

fetch("", {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => console.log(data, "data!"));

const comment = {
  id: 10,
  postId: 1,
  body: "lorem",
  email: "email@gmail.com",
  name: "Karina",
};

// Post - create comment
fetch("https://jsonplaceholder.typicode.com/comments", {
  method: "POST",
  body: JSON.stringify(comment),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.ison())
  .then((data) => console.log(data, "created comment"))
  .catch((err) => console.log(err));

// PUT\patch

fetch("https://jsonplaceholder.typicode.com/comments/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    postId: 1,
    body: "updated body",
    email: "email@gmail.com",
    name: "Karina",
  }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((res) => res.json())
  .then((comment) => console.log(comment, "COMMENT"))
  .catch((err) => console.log(err));

// DELETE
fetch("https://jsonplaceholder.typicode.com/comments/1", {
  method: "DELETE",
})
  .then((res) => {
    console.log(res, "res");
    return res.json();
  })
  .then((data) => console.log(data, "data"))
  .catch((err) => console.log(err));

// CRUD Operations
