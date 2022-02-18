const vegatables = [
  {
  submitter: 'old man Franklin',
  redness: 10,
  plumpness: 6
  },
  {
  submitter: 'tommy',
  redness: 5,
  plumpness: 2
  },
  {
  submitter: 'shiva',
  redness: 6,
  plumpness: 6
  }
];
const metric = 'redness'
const judgeVegatable = function (vegatables, metric){
  let currentMax = vegatables[0][metric];
  let indexOfPerson = 0;
  //console.log (vegatables[1][metric])
  vegatables.forEach ((element, index) => {
    if (element[metric]>=currentMax){
      currentMax = element[metric];
      indexOfPerson = index;
      //console.log (element[metric])
      //console.log (index)
    }
  });
  return vegatables[indexOfPerson].submitter
}
console.log (judgeVegatable(vegatables, metric));