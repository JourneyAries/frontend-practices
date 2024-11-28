//Math.floor()
//Aritmatika /
//Modulus %
function convertSeconds1(seconds) {
  const hours = Math.floor(seconds / 3600);
  const remainingSeconds = seconds % 3600;
  const minutes = Math.floor(remainingSeconds / 60);
  const finalSeconds = remainingSeconds % 60;
  return `${hours}:${minutes}:${finalSeconds}`;
}
console.log(convertSeconds1(3661));

//String Literal``
//Math.floor()
//Aritmatika /
//Modulus %
function convertSeconds2(seconds) {
  return `${Math.floor(seconds / 3600)}:${Math.floor((seconds % 3600)/60)}:${seconds % 60}`;
}
console.log(convertSeconds2(3661));