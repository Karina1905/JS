// Model
// View
// Controller

class Model {
  // abstraction
  static create = () => {};
  static getAll = () => {};
  static getOne = () => {};
  static updateOne = () => {};
  static updateMany = () => {};
  static deleteOne = () => {};

  static generateId = (symbols = 6) => {
    return new Array(symbols)
      .fill("0")
      .map(() => Math.floor(Math.random() * 9))
      .join("");
  };

  constructor(data, options) {
    this.id = Model.generateId();
    this.data = data;
    this.options = options;
  }

  getData() {
    return this.data;
  }

  setData(data) {
    this.data = { ...this.data, ...data };
  }

  setOptions(options) {
    this.options = { ...this.options, ...options };
  }

  delete() {}
}

class UserModel extends Model {
  static DB = new Map();

  static create = (id, data) => {
    UserModel.DB.set(id, data);
    console.log(UserModel.DB);
  };

  static deleteOne = (id) => {
    UserModel.DB.delete(id);
    console.log(UserModel.DB);
  };

  static updateOne = (id, data) => {
    UserModel.DB.set(id, data);
    console.log(UserModel.DB);
  };

  constructor(data, options) {
    super(data, options);

    UserModel.create(this.id, data);
  }
}

class PostModel extends Model {
  static DB = new Map();

  static create = (id, data) => {
    PostModel.DB.set(id, data);
  };

  static deleteOne = (id) => {
    PostModel.DB.delete(id);
  };

  constructor(data, options) {
    super(data, options);

    PostModel.create(this.id, data);
  }
}

// Controller

class Controller {
  constructor(model, options) {
    this.model = model;
    this.options = options;
  }
}

class PostController extends Controller {
  constructor(model, options) {
    super(model, options);
  }

  create(data) {
    return new this.model(data);
  }

  delete(id) {
    this.model.delete(id);
  }

  getAllPostsOfAuthor(authorId) {
    const posts = [];

    this.model.DB.forEach((post, id) => {
      if (post.authorId === authorId) posts.push({ post, id });
    });

    return posts;
  }
}

const postController = new PostController(PostModel);

class UserController extends Controller {
  constructor(model, options) {
    super(model, options);
  }

  create(data) {
    return new this.model(data);
  }

  delete(id) {
    this.model.deleteOne(id);

    const allUserPosts = postController.getAllPostsOfAuthor(id);

    allUserPosts.forEach((post) => postController.delete(post.id));
  }

  update(id, data) {
    this.model.updateOne(id, data);
  }
}

const userController = new UserController(UserModel);

class View {
  constructor(controllers, parent) {
    this.controllers = controllers;
    this.parent = parent;
  }

  render() {}
}

class UserCreateView extends View {
  constructor(controllers, parent) {
    super(controllers, parent);
  }

  onSubmit(data) {
    const { userController } = this.controllers;
    userController.create(data);
  }

  clearInputData() {
    [...document.querySelectorAll("input")].forEach(
      (input) => (input.value = "")
    );
  }

  render() {
    const nameInput = document.createElement("input");
    const ageInput = document.createElement("input");

    const button = document.createElement("button");
    button.textContent = "Create";

    button.onclick = () => {
      this.onSubmit({ name: nameInput.value, age: ageInput.value });
      this.clearInputData();
    };

    [nameInput, ageInput, button].forEach((element) =>
      this.parent.appendChild(element)
    );
  }
}

new UserCreateView({ userController }, document.body).render();

class EditUserView extends View {
  constructor(controllers, parent) {
    super(controllers, parent);
  }

  onSubmit(id, data) {
    const { userController } = this.controllers;
    userController.update(id, data);
  }

  clearInputData() {
    [...document.querySelectorAll("input")].forEach(
      (input) => (input.value = "")
    );
  }

  render() {
    const input = document.createElement("input");
    input.placeholder = "id"
    const nameInput = document.createElement("input");
    nameInput.placeholder = "name"
    const ageInput = document.createElement("input");
    ageInput.placeholder = "age"
    const button = document.createElement("button");
    button.textContent = "Edit user";

    button.onclick = () => {
      const id = input.value;
      const data = { name: nameInput.value, age: ageInput.value };
      this.onSubmit(id, data);
      this.clearInputData();
    };

    [input, nameInput, ageInput, button].forEach((element) =>
      this.parent.appendChild(element)
    );
  }
}

new EditUserView({ userController }, document.body).render();

class DeleteUserView extends View {
  constructor(controllers, parent) {
    super(controllers, parent);
  }

  onDelete(id) {
    const { userController, postController } = this.controllers;
    // [NOTE]: Post controller can also be used here
    userController.delete(id);
  }

  render() {
    const input = document.createElement("input");
    const button = document.createElement("button");
    button.textContent = "Delete user";

    button.onclick = () => {
      this.onDelete(input.value);
    };

    [input, button].forEach((element) => this.parent.appendChild(element));
  }
}

new DeleteUserView({ userController, postController }, document.body).render();

class CreatePostView extends View {
  constructor(controllers, parent) {
    super(controllers, parent);
  }

  onSubmit(id, data) {
    const { postController } = this.controllers;
    postController.create(id, data);
  }

  clearInputData() {
    [...document.querySelectorAll("input")].forEach(
      (input) => (input.value = "")
    );
  }

  render() {
    const idInput = document.createElement("input");
    idInput.placeholder = "id"
    const postInput = document.createElement("input");
    postInput.placeholder = "your text"
    const button = document.createElement("button");
    button.textContent = "Post";

    button.onclick = () => {
      const id = idInput.value;
      const data = postInput.value;
      this.onSubmit(id, data);
      this.clearInputData();

      const postElement = document.createElement("div");
      postElement.innerHTML = `
        <div style="border: 3px solid black; border-radius:10px; background-color: lightgray; display: inline-block; padding: 5px">
          <p>${data}</p>
          <p>${id}</p>
        </div>
      `;
      document.body.appendChild(postElement);
    };

    [idInput, postInput, button].forEach((element) =>
      this.parent.appendChild(element)
    );
  }
}

new CreatePostView({ postController }, document.body).render();
