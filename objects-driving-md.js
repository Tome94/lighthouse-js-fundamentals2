const cars = [
  {
    time: 0,
    speed: 0
  }
]
function carPassing (cars, speed){
  let newCar = {
    time : Date.now (),
    speed : speed
  };
  cars.push (newCar)
  return cars;
}

console.log (carPassing (cars, 105))
console.log (carPassing (cars, 100))
console.log (carPassing (cars, 90))