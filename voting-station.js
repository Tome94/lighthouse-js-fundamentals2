const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, "school"],
  ['Moose Mountain Community', 45, "community"],
  ['Codeville Epic Academy', 15, 'school'],
  ['Big At Pizza', 50, 'restaurant']
]
//good stations atleast 20 capacity 
//station can only be schools and community
function chooseStation (stations){
  /*tradition 
  const station = ""
  for (let i = 0; i < stations.length; i++){
  station += stations [i]
  } */
  const goodStations = []
for (const station of stations){
//console.log (station)
const capacity = station [1]

if (capacity >= 20 ) {
//console.log (station [0])
const location = station [2]
  if (location === 'school' || location === 'community'){
    goodStations.push (station[0])    //console.log (station[0])
  }
}
}
return goodStations
}
console.log (chooseStation(stations))