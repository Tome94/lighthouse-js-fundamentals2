 function calculateRectangleArea (length, width){
    let rectangle = length * width;
    if (rectangle<=0){
        return undefined;
  }
  else return rectangle;
}

function calculateTrianlgeArea (base, height){
  let triangle = base * height / 2;
  if (triangle<=0){
    return undefined;
  }
  else return triangle;
}
function calculateCircleArea (radius){
  let circle = Math.PI * Math.sqrt (radius)
  if (circle<=0){
    return undefined
  }
  else return circle
}

console.log (calculateRectangleArea (10, 5));
console.log (calculateRectangleArea (1.5, 2.5));
console.log (calculateRectangleArea (10, -5));

console.log (calculateTrianlgeArea (10, 5));
console.log (calculateTrianlgeArea (3, 2.5));
console.log (calculateTrianlgeArea (10, -5));

console.log (calculateCircleArea (10));
console.log (calculateCircleArea (3.5));
console.log (calculateCircleArea (-1));