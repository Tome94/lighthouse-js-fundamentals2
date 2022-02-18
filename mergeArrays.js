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
  

  const merge = function (arrays1 , arrays2){
    let mergeArray = []
    mergeArray = arrays1.concat (arrays2)
    return mergeArray.sort()
  }
  console.log (merge ([1, 2, 9, 4], [5, 6 , 7]))