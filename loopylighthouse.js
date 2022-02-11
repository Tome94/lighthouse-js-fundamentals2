for ( let num = 100 ;num <= 200; num++){
  if (num % 3 === 0 && num % 4 ===0){
    console.log ("loopylighthouse")
  }
  else if (num % 3 === 0){
    console.log ("loopy")
  }
  else if (num % 4 === 0){
    console.log ("Lighthouse")
  }
  else {
    console.log (num)
  }
}