
const smartGarbage = function (trash, bins){
  if (trash === 'waste'){
    bins.waste += 1;
  }
  else if (trash === 'recycling'){
    bins.recycling += 1;
  }
  else if (trash === 'compost'){
    bins.compost += 1;
  }
  else {
    return undefined;
  }
  console.log (bins);
  return (bins);
}
//console.log (smartGarbage('waste'))
smartGarbage ('waste', {waste: 1, recycling: 1, compost: 1});
smartGarbage ('recycling', {waste: 1, recycling: 1, compost: 1});
/*
const bins1 = {
  waste1: 0,
  recycling1: 0,
  compost1: 0
}
const smartGarbage = function (trash){
  if (trash === 'waste'){
    bins1.waste1 += 1;
  }
  else if (trash === 'recycling'){
    bins1.recycling1 += 1;
  }
  else if (trash === 'compost'){
    bins1.compost1 += 1;
  }
  else {
    return undefined;
  }
  console.log (bins1);
  return (bins1);
}
//console.log (smartGarbage('waste'))
smartGarbage ('waste');
smartGarbage ('waste');
smartGarbage ('waste');
smartGarbage ('compost')
*/