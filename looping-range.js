function range (start, end, step){
  const some_array = [];
  if (start === undefined || start > end  || step <= 0){
    return [];
  }
  else{
  for (let i = start; i < end; i += step){
    some_array.push (i);
  }
  return some_array;
}
}
console.log (range(10 , 100 , 10));
console.log (range(10 ," " , 10));
console.log (range(-5, 10, -1));
console.log (range (-5, 2, 3));