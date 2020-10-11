var fruits = ['cerise', 'abricot', 'pomme', 'framboise'];

/*** On affiche tout de suite ***/


// On veut afficher en console :
// Je mange : <fruit>

// Avec le mot clé var, les variables sont accessibles dans tout le fichier
// Le mot clé LET permet de définir des variables sont la portée
// est limitée au bloc en cours,

// for (let index = 0; index < fruits.length; index++) {
//   console.log('Je mange : ' + fruits[index]);
//   var b = 33;
//   var c = 18;
// }


// var d = c + b;
// console.log(d);

// Avec LET, index n'est plus défini en dehors du bloc de sa déclaration

// console.log(index);



// La variable index continue d'être définie !



/*
// Un `for` amélioré
// forEach : méthode fonctionnelle
// array = pluriel, item = singulier
*/ 

// fruits.forEach(testFunction);

// function testFunction(fruit, index){
//   console.log(index, fruit);
// };

// Si pas de return dans une fonction appelée, alors le return sera "undefined"
// var resultat = testFunction();
// console.log(resultat) -> "undefined";


/*** On affiche 3 secondes après ***/

/*
// For
*/

// Le fait d'utiliser let dans la boucle (au lieu de var)
// permet à js de se souvenir quelle était la valeur de la variable
// à un moemnt de la boucle donné.

// for (let index = 0; index < fruits.length; index++) {
//   setTimeout(function() {
//     console.log('Je mange : ' + fruits[index]);
//   }, 1000 * index);
// }


function consoleLog(qqchose){
  console.log(qqchose);
  return "Je mange " + qqchose;
}

console.log("J'utilise un for each");
let resultForEach = fruits.forEach(consoleLog);

console.log("J'utilise un map");
let resultMap = fruits.map(consoleLog);

console.log(resultForEach);

console.log(resultMap);





/*
// Index = 4 :'(
*/

/*
// forEach
fruits.forEach(function(fruit, index) {
  // La variable "fruit" est locale à ma fonction anonyme
  // Elle n'est pas réécrite par la prochaine itération
  setTimeout(function() {
    console.log('Je mange : ' + fruit);
  }, 1000 * index);
});
*/


/*** Quelques astuces… ***/

/*
// For
for (var index = 0; index < fruits.length; index++) {
  // IIFE !
  (function(idx) {
    setTimeout(function() {
      console.log('Je mange : ' + fruits[idx]);
    }, 1000 * idx);
  })(index);
}
// Index = 4 :'(
*/

// Ma fonction nommée
/*
function eatFruit(fruit, index) {
  // La variable "fruit" est locale à ma fonction anonyme
  // Elle n'est pas réécrite par la prochaine itération
  setTimeout(function eatFruitNow() {
    console.log('Je mange : ' + fruit);
  }, 1000 * index);
}
*/


// Ma variable fonction
/*
var eatFruit = function(fruit, index) {
  // La variable "fruit" est locale à ma fonction anonyme
  // Elle n'est pas réécrite par la prochaine itération
  setTimeout(function() {
    console.log('Je mange : ' + fruit);
  }, 1000 * index);
};
*/


// forEach
// fruits.forEach(eatFruit);


/*** One more thing… ***/

/*
// La fonction map : renvoie un nouvel array modifié !
function fruitToSentence(fruit) {
  return 'je mange : ' + fruit;
}

var sentences = fruits.map(fruitToSentence);
console.log(sentences);
*/

/*
for (let index = 0; index < fruits.length; index++) {
  setTimeout(function() {
    console.log('Je mange : ' + fruits[index]);
  }, 1000 * index);
}
*/
