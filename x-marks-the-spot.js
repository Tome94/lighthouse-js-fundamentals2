const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']
//const finalShot = [-1 ,4]
function finalPosition (moves){
let x = 0;
let y = 0 ;
for (const move of moves){
  if (move ==='north'){
    y++;
  }
  else if (move === 'south'){
    y--;
  }
  else if (move === 'west'){
    x--;
  }
  else if (move === 'east'){
    x++;
  }
}
return [x ,y]
}
console.log (finalPosition (moves))
const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'south']
console.log (finalPosition (moves))

/*
function printGrid(x ,y){
  const gridX = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
  const gridY = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]
for (let i = 0; i <= gridX.length; i++){
  let x = -5
  x === x + gridX [i]
  console.log (x)
}
 for (const x of gridX){
    //return (x)
    console.log (x)
  }
  for (const y of gridY){
    //return (y)
  } */

//console.log (printGrid(x +" "+y))

