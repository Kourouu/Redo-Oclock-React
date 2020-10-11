var fruits = ['cerise', 'abricot', 'pomme', 'framboise'];

/*** On affiche tout de suite ***/

/*
// On veut afficher en console :
// Je mange : <fruit>
for (var index = 0; index < fruits.length; index++) {
  console.log('Je mange : ' + fruits[index]);
}
// La variable index continue d'être définie !
*/

/*
// Un `for` amélioré
// forEach : méthode fonctionnelle
// array = pluriel, item = singulier
fruits.forEach(function(fruit) {
  // La variable fruit "vit" uniquement au sein de la fonction
  console.log('Je mange : ' + fruit);
});
*/


/*** On affiche 3 secondes après ***/

/*
// For
for (var index = 0; index < fruits.length; index++) {
  debugger;
  setTimeout(function() {
    console.log('Je mange : ' + fruits[index]);
  }, 1000 * index);
}
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
