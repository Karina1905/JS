const date6 = new Date();
function fixedTimeValue(value) {
    if (value < 10){
        return `0${value}`
    } else {
        return value;
    }
}

setInterval(() => {
    date6.setMilliseconds(date6.getMilliseconds() + 500);;
  // Вивести лише hh:mm:ss
  // Забезпечити виведення 0 якщо в одиниці часу є лише одна цифра
  //  20:1:22  => 20:01:22
  //  20:11:22 => 20:11:22

  const [hours, minutes, seconds, miliseconds] = [
    date6.getHours(),
    date6.getMinutes(),
    date6.getSeconds(),
    date6.getMilliseconds(),
  ];

  console.log(
    `${fixedTimeValue(hours)}:${fixedTimeValue(minutes)}:${fixedTimeValue(
      seconds
    )}:${fixedTimeValue(miliseconds)}`
  );
}, 500);
