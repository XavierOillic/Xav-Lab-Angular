// M A P P I N G  avec un SET qui supprime les doublons.
const array = [1, 2, 3, 5, 6];
console.log(array);
const array2 = array.map(x => x * 2);

const users = [
  {age: 3, name: 'Coco'}, {age:60, name:"Jean"},{age:"70", name:"Jacques"}
];
const usersNew = users.map(y => y.name)
console.log(usersNew);
 

// SET ==> Supprimer les doublons
const tableau = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
const tabSansDoublon = new Set(tableau);
console.log(tabSansDoublon);

// SET ==> Supprimer les derniers elements
const tab = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
tab.pop(5)
console.log(`shift ==> ${tab}`);

// SORT BY ALPHABETIC
let months = ['Décembre', 'Février', 'Mars', 'Avril'];
months.sort();
console.log(months);

// SORT
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];
items.sort(function (a, b) {
  return a.value - b.value;
});
console.log(items);

// SORT // items is [ 'adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé' ]
var items = ["réservé", "premier", "cliché", "communiqué", "café", "adieu"];
items.sort(function (a, b) {
  return a.localeCompare(b);
});
console.log(items);

// function tri
var vehicules= [
   { nom: "Peugeot 208 1,2l PureTech", img:"208.png" , co2:108 },
   { nom: "Peugeot 5008 2.0 BlueHDi 150", img:"5008.png" , co2: 118 },
   { nom: "Golf GTI", img:"golfgti.png" , co2:148 },
   { nom: "Renault Clio 0.9 TCe 90", img:"clio.jpg" , co2:114 },
   { nom: "Audi A4 2.0 TDI 190", img:"a4.png" , co2: 111},
   { nom: "BMW Serie 2 Tourer 220d", img:"serie2tourer.png" , co2:124 },
   { nom: "Audi SQ7", img:"sq7.png" , co2:198 },
   { nom: "Audi TTS", img:"tts.png" , co2:159 },
];
vehicules.sort(function (a, b) {
 if (a.nom < b.nom) {
   return -1;
 } else {
   return 1;
 };
});
vehicules.forEach(function(v) {
   console.log("  "+v.nom+" avec "+v.co2+" g de CO2/km");    
});

