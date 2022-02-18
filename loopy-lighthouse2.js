/*
function loopyLightHouse ([start,end], [num1, num2], [words1, words2]){
for (let i = start; i <= end; i++ ){
  //console.log (i)
  if (i%num1===0 && i % num2 ===0){
    console.log (words1+words2)
  }
  else if (i%num1===0){
    console.log (words1);
  }
  else if (i%num2 === 0){
     console.log (words2);
  }
 else {console.log (i)
 }
} 
//console.log (i)
}
loopyLightHouse ([15, 90], [2, 5], ["Batty", "beacon"]);
*/

function loopyLightHouse (range, multipules, words){
  let array = []
  for (let i = range [0]; i <= range [1]; i++ ){
    //console.log (i)
    if (i%multipules[0]===0 && i % multipules[1] ===0){
      //console.log (words1+words2)
       array = words [0][1]
    }
    else if (i%multipules[0]===0){
      //console.log (words1);
       array = words [0]
    }
    else if (i%multipules[1] === 0){
       //console.log (words2);
       array = words [1]
    }
   else {
     array.push (i)
     //console.log (i)
   }
   //console.log (i)
  } 
  console.log (array)
  }
  loopyLightHouse ([15, 90], [2, 5], ["Batty", "beacon"]);