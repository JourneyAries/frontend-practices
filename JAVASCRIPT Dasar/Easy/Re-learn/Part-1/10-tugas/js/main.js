//Math.round();
let hoursToSeconds1 = hours => {
  return Math.round(hours * 3600);
}
console.log(hoursToSeconds1(7200));

//bitwise | 0
let hoursToSeconds2 = hours => {
  return (hours * 3600) | 0;
}
console.log(hoursToSeconds2(7200));