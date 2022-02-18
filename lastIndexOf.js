function lastIndexOf (array, value){
  output = 0
 for (let i = 0; i < array.length; i++){
  if (array [i] === value){
    output =  i
    //return i if you want the first index
  }
  else {
    output = -1
  }
 }return output
}

console.log (lastIndexOf([0,1,2,3,1,2,3],3))
console.log (lastIndexOf([0,1,2,3,1,2,3],4))