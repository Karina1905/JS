class Catalog {
  static elements = {
    categories: document.querySelector(".categories"),
    goods: document.querySelector(".goods"),
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

      Catalog.elements.goods.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="${image}" class="card-img-top" alt="${title}"/>
          <div class="card-body">
            <h5 class="card-title">${title}, ${price}</h5>
            <p class="card-text">${description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      `;
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
