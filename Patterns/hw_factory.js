class Dish {
  prepare() {
    throw new Error("This method should be overridden!");
  }
}
class Pizza extends Dish {
  prepare() {
    console.log("Preparing Pizza");
  }
}

class Salad extends Dish {
  prepare() {
    console.log("Preparing Salad");
  }
}

class Dessert extends Dish {
  prepare() {
    console.log("Preparing Dessert");
  }
}

class DishFactory{
    createDish(dish) {
        if(dish=="pizza"){
            return new Pizza();
        
        }
        else if(dish=="salad"){
            return new Salad()
        }
        else if(dish=="dessert"){
            return new Dessert()
        }
        else{
            console.log("not a dish")
        }
    }
}

const factory = new DishFactory()

let dish = factory.createDish("pizza");
dish.prepare();