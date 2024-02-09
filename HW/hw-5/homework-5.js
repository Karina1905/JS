// Дано

function repeat (message, times) {
    let counter = times;
    // опишіть функцію repeat так, щоб вона виводила message [times] разів (while)
    while (counter > 0) {
        console.log(message, times);
        counter = counter - 1;
    }
    }
    
    repeat("Hello", 5);





    
    // Дано
    
    function getMonthsOf(season) {
        // опишіть функцію getMonthsOf, яка залежно від пори року 
      // (winter, summer, autumnm, spring) поверне її місяці як строку (switch-case)
      switch (season) {
        case "summer":
            console.log("June, July, August");
            break;
        case "winter":
            console.log("December, January, February");
            break;
        case "autumn":
            console.log("Semtember, October, November");
            break;
        case "spring":
            console.log("March, April, May");
            break;
      } 
    }
    
    getMonthsOf("spring");