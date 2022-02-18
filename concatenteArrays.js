
function concat (array1 , array2){
let newArray = []
for (arrayItem of array1){
  newArray.push (arrayItem)
}
for (arrayItem of array2){
  newArray.push (arrayItem)
}
return newArray
}
console.log (concat([1, 2, 3, 4], [5, 6 , 7]))

function concat1 (arrays1 , arrays2){
  return arrays1.concat (arrays2)
}
console.log (concat1([1, 2, 3, 4], [5, 6 , 7]))