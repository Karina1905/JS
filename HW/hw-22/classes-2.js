class Restaurant {
  #feedbacks;
  constructor(visitors, rating, avgPrice, feedbacks = []) {
    this.visitors = visitors;
    this.rating = rating;
    this.avgPrice = avgPrice;
    this.#feedbacks = feedbacks;
  }

  deleteFeedback(feedback) {
    this.#feedbacks = this.#feedbacks.filter((fb) => fb != feedback);
  }

  addFeedback(feedback) {
    this.#feedbacks.push(feedback);
  }

  clear() {
    this.#feedbacks = [];
  }
}

const restaurant = new Restaurant(24, 8.7, 30, ["good", "bad", "excellent"]);
console.log(restaurant);
restaurant.addFeedback("not bad");
restaurant.deleteFeedback("bad");
restaurant.clear();
console.log(restaurant.feedbacks);
