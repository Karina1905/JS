const animals = {
  lion123: {
    id: "lion123",
    species: "Lion",
    age: 6,
    gender: "Male",
    habitat: "Savannah",
    weight_kg: 190,
    diet: "Carnivore",
    lifespan_years: 12,
    conservation_status: "Vulnerable",
    location: {
      latitude: -1.2921,
      longitude: 36.8219,
      region: "Africa",
    },
  },
  elephant456: {
    id: "elephant456",
    species: "African Elephant",
    age: 15,
    gender: "Female",
    habitat: "Grasslands",
    weight_kg: 5000,
    diet: "Herbivore",
    lifespan_years: 60,
    conservation_status: "Vulnerable",
    location: {
      latitude: -4.4419,
      longitude: 15.2663,
      region: "Africa",
    },
  },
  tiger789: {
    id: "tiger789",
    species: "Tiger",
    age: 8,
    gender: "Female",
    habitat: "Tropical Rainforest",
    weight_kg: 150,
    diet: "Carnivore",
    lifespan_years: 10,
    conservation_status: "Endangered",
    location: {
      latitude: 13.4125,
      longitude: 103.866,
      region: "Asia",
    },
  },
  panda101: {
    id: "panda101",
    species: "Giant Panda",
    age: 5,
    gender: "Male",
    habitat: "Temperate Broadleaf and Mixed Forests",
    weight_kg: 120,
    diet: "Herbivore",
    lifespan_years: 20,
    conservation_status: "Vulnerable",
    location: {
      latitude: 30.5928,
      longitude: 103.9526,
      region: "Asia",
    },
  },
  wolf111: {
    id: "wolf111",
    species: "Gray Wolf",
    age: 4,
    gender: "Female",
    habitat: "Taiga",
    weight_kg: 40,
    diet: "Carnivore",
    lifespan_years: 13,
    conservation_status: "Least Concern",
    location: {
      latitude: 61.524,
      longitude: 105.3188,
      region: "Europe",
    },
  },
  penguin222: {
    id: "penguin222",
    species: "Emperor Penguin",
    age: 12,
    gender: "Male",
    habitat: "Antarctic",
    weight_kg: 40,
    diet: "Carnivore",
    lifespan_years: 20,
    conservation_status: "Near Threatened",
    location: {
      latitude: -82.8628,
      longitude: 135,
      region: "Antarctica",
    },
  },
  giraffe333: {
    id: "giraffe333",
    species: "Giraffe",
    age: 10,
    gender: "Male",
    habitat: "Savannah",
    weight_kg: 1200,
    diet: "Herbivore",
    lifespan_years: 25,
    conservation_status: "Vulnerable",
    location: {
      latitude: -4.4419,
      longitude: 34.8522,
      region: "Africa",
    },
  },
  koala444: {
    id: "koala444",
    species: "Koala",
    age: 7,
    gender: "Female",
    habitat: "Eucalypt Woodlands",
    weight_kg: 8,
    diet: "Herbivore",
    lifespan_years: 15,
    conservation_status: "Vulnerable",
    location: {
      latitude: -25.2744,
      longitude: 133.7751,
      region: "Australia",
    },
  },
  rhino555: {
    id: "rhino555",
    species: "White Rhino",
    age: 20,
    gender: "Male",
    habitat: "Grasslands",
    weight_kg: 2300,
    diet: "Herbivore",
    lifespan_years: 40,
    conservation_status: "Near Threatened",
    location: {
      latitude: -23.4162,
      longitude: 31.3659,
      region: "Africa",
    },
  },
  orca666: {
    id: "orca666",
    species: "Orca",
    age: 30,
    gender: "Female",
    habitat: "Marine",
    weight_kg: 5000,
    diet: "Carnivore",
    lifespan_years: 50,
    conservation_status: "Data Deficient",
    location: {
      latitude: 48.5126,
      longitude: -123.383,
      region: "North America",
    },
  },
};

function animalsOfAfrica(animals) {
  let result = "";
  for (const key in animals) {
    const animal = animals[key];
    if (animal.location.region.toLowerCase() === "africa") {
      result = result + animal.species + ", ";
    }
  }
  result = result.slice(0, -2);
  return result;
}
console.log(animalsOfAfrica(animals));

function averWeight(animals) {
  let result = {
    count: 0,
    weight: 0,
  };
  for (const key in animals) {
    const animal = animals[key];
    result.count += 1;
    result.weight += animal.weight_kg;
  }
  return result.weight / result.count;
}
console.log(averWeight(animals));

delete animals.tiger789;
let keys = Object.keys(animals);
console.log(keys);

// 1. Поверніть об`єкт лише з тваринами з Африки
// 2. Порахуйте середню вагу всіх тварин
// 3. Видаліть тигра зі списку
