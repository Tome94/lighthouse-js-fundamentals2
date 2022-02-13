const ageCalculator = function (name, yearOfBirth, currentYear){
  let age = 0
  age = currentYear - yearOfBirth
  return (name +' is ' + age + " years old.")
}
console.log (ageCalculator("Tommy", 1994, 2022))
console.log (ageCalculator("Shiva", 1997, 2022))    