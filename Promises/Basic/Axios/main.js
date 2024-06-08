
console.log(axios, window.axios, "axios");

// GET, POST, PATCH, PUT, DELETE
axios
  .get("https://jsonplaceholder.typicode.com/albums")
  .then((response) => console.log(response.data, "data"))
  .catch((error) => console.log(error, "error"));

const data = {
  id: 10,
  iserId: 10,
  title: "Hello, this is new album",
};

axios
  .post("https://jsonplaceholder.typicode.com/albums/1", data)
  .then((data) => console.log(data, "created album"))
  .catch((err) => console.log(err, "err"));

// Завдання:
// написати GET запит на посилання
// https://jsonplaceholder.typicode.com/users

// Отримати та вивести data
// Вiдловити помилки

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => console.log(response.data, "data"))
  .catch((error) => console.log(error, "error"));

axios
  .put("https://jsonplaceholder.typicode.com/albums/1", {
    id: 11,
    userId: 8,
    title: "@@@@@@@@@@",
  })
  .then((response) => console.log(response.data))
  .catch((err) => console.log(err, "err"));

fetch("https://jsonplaceholder.typicode.com/albums/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 11,
    userId: 1,
    title: "@@@@",
  }),
});

axios
  .delete("https://jsonplaceholder.typicode.com/albums/1")
  .then((response) => console.log(response.data, "data"))
  .catch((error) => console.log(error, "error"));

// Another way of using axios

axios({
  method: "get",
  url: "https://jsonplaceholder.typicode.com/albums",
}).then((response) => console.log(response.data));

// GET
axios("https://jsonplaceholder.typicode.com/albums").then((response) =>
  console.log(response.data)
);

// BACKEND base url https://jsonplaceholder.typicode.com

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "Application/json",
  },
  timeout: 5000,
});

// sub-route request
axiosInstance.get("/users").then((res) => console.log(res.data));

// Завдання:
// Cтворiть свiй axios instance та зробiть кiлька запитiв (get):
// "/albums", "/posts", "/comments"

// Дочекайтеся всiх запитiв, вивести результат цих запитiв
// axios
//   .all([
//     axiosInstance.get("/albums"),
//     axiosInstance.get("/posts"),
//     axiosInstance.get("/comments"),
//   ])
//   .then((results) => {
//     results.forEach((response) => {
//       console.log(response.data);
//     });
//   });

Promise.all([
  axiosInstance.get("/albums"),
  axiosInstance.get("/posts"),
  axiosInstance.get("/comments"),
]).then((data) => {
  data.forEach((res, i) => {
    console.log("Data${i}: ${res.data}");
  });
});

// Async /await
async function getUsers() {
  // await
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  console.log(response);
  const data = await response.json();

  console.log("Final data");
  return data;
}

new Promise((res) => res(users));

getUsers().then((users) => console.log(users, "FINAL USERS"));
async function getPosts() {
  const { data: posts } = await axiosInstance.get("/posts");
  console.log(posts, "posts");
}

getPosts();

async function createPost(post) {
  const { data: createdPost } = await axiosInstance.post("/posts", post);
  return createdPost;
}

createPost({ id: 101, userId: 1, title: "Hello", body: "Something" }).then(
  (createdPost) => console.log(createdPost, "createdPost")
);

// const fn = async () => {};
// const fn1 = async function () {};

class API {
  constructor(baseURL, headers, timeout) {
    this.baseURL = baseURL;
    this.headers = headers;
    this.timeout = timeout;

    this.instance = axios.create({ baseURL, headers, timeout });
  }

  async get(path) {
    const { data } = this.instance.get(path);
    return data;
  }

  async post(path, body) {
    const { data } = this.instance.post(path);
    return data;
  }

  async put(path) {
    const { data } = this.instance.put(path);
    return data;
  }

  async patch(path) {
    const { data } = this.instance.patch(path);
    return data;
  }

  async delete(path) {
    const { data } = this.instance.delete(path);
    return data;
  }
}

// H/W

// const api = new API(
//   "https://jsonplaceholder.typicode.com",
//   {
//     "Content-Type": "Application/Json",
//   },
//   10000
// );

// // Just an example
// api.get("/users").then((users) => console.log("USERS FROM API", users));

// H/W

// const api = new API(
//   "https://fakestoreapi.com",
//   {
//     "Content-Type": "Application/Json",
//   },
//   1000
// );

// api.get("/products").then((products) => console.log(products));

// const getOneProduct = async (prodId) => {
//   try {
//     const product = await api.get(`/products/${prodId}`);
//     return product;
//   } catch (error) {
//     console.log(error);
//   }
// };

// getOneProduct(1).then((product) => console.log("PRODUCT DETAIL", product));

class ExtendAPI extends API {
  async getOneProduct(prodId) {
    const { data } = await this.instance.get(`/products/${prodId}`);
    return data;
  }
}

const api = new ExtendAPI(
  "https://fakestoreapi.com",
  {
    "Content-Type": "Application/Json",
  },
  10000
);

api.getOneProduct(1).then((product) => console.log("Product", product));
// Посилаючись на https://fakestoreapi.com/products/
// Унаслiдувати клас API та розписати додактовi методи:
// getOneProduct
