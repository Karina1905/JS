class Catalog {
  static elements = {
    categories: document.querySelector(".categories"),
    goods: document.querySelector(".goods"),
    search: document.querySelector("#search-input"),
  };

  static searchGoods = async (query = "") => {
    try {
      const { data: products } = await API.get("/products");

      if (!query) {
        Catalog.renderGoods(products);
        return;
      }
      const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      Catalog.renderGoods(filteredProducts);
    } catch (err) {
      alert(err.response.data);
    }
  };

  static renderCategories = async () => {
    try {
      const { data: categories } = await API.get("/products/categories");

      categories.forEach((category) => {
        const span = document.createElement("span");
        span.className = "badge rounded-pill text-bg-primary";
        span.textContent = category;

        span.addEventListener("click", () => {
          Catalog.renderGoodsOfCategory(category);
        });

        Catalog.elements.categories.appendChild(span);
      });
    } catch (err) {
      alert(err.response.data);
    }
  };

  static renderGoods = (goods) => {
    Catalog.elements.goods.innerHTML = "";

    goods.forEach((good) => {
      const { title, price, category, description, image } = good;

      const card = document.createElement("div");
      card.className = "card";
      card.style.width = "18rem";

      card.innerHTML += `
        <img src="${image}" class="card-img-top" alt="${title}"/>
        <div class="card-body">
          <h5 class="card-title">${title}, ${price}</h5>
          <p class="card-text">${description}</p>
        </div>
      `;

      Catalog.elements.goods.appendChild(card);

      const addToCartButton = document.createElement("button");
      addToCartButton.className = "btn btn-outline-warning";
      addToCartButton.style.marginBottom = "10px"
      addToCartButton.textContent = "Add to Cart";

      addToCartButton.addEventListener("click", () => {
        CartAPI.addToCart(good);
      });

      const removeFromCartButton = document.createElement("button");
      removeFromCartButton.className = "btn btn-outline-success";
      removeFromCartButton.textContent = "Remove From Cart";

      removeFromCartButton.addEventListener("click", () => {
        CartAPI.removeFromCart(good);
      });

      card.querySelector(".card-body").appendChild(addToCartButton);
      card.querySelector(".card-body").appendChild(removeFromCartButton);
    });
  };

  static renderAllGoods = async () => {
    try {
      const { data: products } = await API.get("/products");
      Catalog.renderGoods(products);
    } catch (err) {
      alert(err.response.data);
    }
  };

  static renderGoodsOfCategory = async (category) => {
    try {
      const { data: goods } = await API.get(`/products/category/${category}`);
      Catalog.renderGoods(goods);
    } catch (error) {
      alert(error.response.data);
    }
  };
}

Catalog.renderCategories();
Catalog.renderAllGoods();

Catalog.elements.search.oninput = (event) => {
  console.log(event.target.value, "value");
  Catalog.searchGoods(event.target.value);
};
