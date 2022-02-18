const howManyHundreds = function (bottles){
  /*let container = 0;
  return container = bottles /100;
  */
 let remainder = bottles % 100
  return ((bottles - remainder)/100 + " container is be shipped to mars.")
  //(bottles/100 -(bottles - remainder))
// return bottles % 100)
}
console.log (howManyHundreds(500))
console.log (howManyHundreds(450))
console.log (howManyHundreds(1451))