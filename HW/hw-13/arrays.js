const users = [
    { name: "Igor", age: 24 },
    { name: "Oleg", age: 29 },
    { name: "Alex", age: 30 },
    { name: "Joe", age: 14 },
  ];

  function nameLength(users) {
    let len = 0;
    for (const user of users) {
        len += user.name.length;

    }
    return len;
  }
  console.log(nameLength(users));