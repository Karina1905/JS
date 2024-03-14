const locations = [
    { name: "New York City", population: 8398748, rating: 4.5 },
    { name: "Tokyo", population: 37400068, rating: 4.7 },
    { name: "London", population: 8982000, rating: 4.6 },
    { name: "Paris", population: 2141000, rating: 4.4 },
    { name: "Los Angeles", population: 3990456, rating: 4.3 },
    { name: "Shanghai", population: 24183300, rating: 4.8 },
    { name: "Dubai", population: 3312000, rating: 4.9 },
    { name: "Sydney", population: 5312163, rating: 4.6 },
    { name: "Rio de Janeiro", population: 6718903, rating: 4.1 }
  ];
  
  // 1. Виведіть локації з рейтингом вище за 4.5
  // 2. Виведіть локації з population нижче за 2000000

  const highRate = locations.filter((location) => location.rating > 4.5);
  const lowerPopulation = locations.filter((location) => location.population < 20000000);
  console.log(highRate);
  console.log(lowerPopulation);