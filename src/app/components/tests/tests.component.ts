import { Component } from '@angular/core';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent {
}

/**
 * Level 1
 */
let notes = [3, 4, 3, 5, 6, 3, 8, 3, 9, 9, 90, 6, 3];
let searchNote = 3;
let result = notes.filter((note) => note == searchNote);
console.log(result);
// => [3, 3] =========== > OK FONCTIONNE !

/**
 * Level 2
 */

let students = ["Reda", "James", "Charles", "Sophie", "Leonard", "Stephanie"];
let searchStudent = "s";
let arr : [];
function filterS(arr: any[], banana: string){
  return arr.filter((x) => x.toLowerCase().includes(banana.toLowerCase()));
}
console.log(` EX. 2 J.Bojko\n == > ${filterS(students, 's')}`);
// => [3, 3] =========== > OK FONCTIONNE !


/**
 * Level 3
 */
let user = [
  {name: "Coco", age: 3, profession: "Dentiste"},
  {name: "Luce", age: 38, profession: "Cuisinier"},
  {name: "Sophie", age: 8, profession: "Garagiste"},
  {name: "Marcel", age: 8, profession: "Artiste"},
  {name: "Paul", age: 42, profession: ""},
  {name: "Marjolaine", age:78, profession: "Retraitée"},
  {name: "Louane", age: 39, profession: "Dessinatrice", sport:"Judo"}, 
];
let searchL = "l";
let arrL = [];
const filtrL = user.filter(function(arrL){
    return arrL.name.toLowerCase().includes(searchL);
  })
console.log(" EX. 3 J.Bojko\n v v v v v ");
console.log(filtrL);


let searchA = "a";
let arrA = [];
const filtrA = user.filter(function(arrA){
  return arrA.profession.toLowerCase().includes(searchA);
})
console.log(" EX. 3 bis J.Bojko\n v v v v v ");
console.log(filtrA);


function tri() {
  throw new Error('Function not implemented.');
}

function filtrS() {
  throw new Error('Function not implemented.');
}

