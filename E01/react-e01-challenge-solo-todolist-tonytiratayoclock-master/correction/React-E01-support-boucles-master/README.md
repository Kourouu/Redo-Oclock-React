# Découverte de la programmation fonctionnelle

## `.forEach()`

* Une alternative fonctionnelle à `for`

* Bonnes pratiques :
  + array = variable au pluriel (par ex : `datas`)
  + item = variable au singulier (par ex : `data`)

* Nouvelle portée de variable
  + comparaison avec un `for` + `setTimeout` : c'est bien pratique d'avoir un nouveau scope !
  + Sans `.forEach()`, on aurait pu faire une closure à l'ancienne : IIFE

* Test avec `debugger`

* Une fonction est une valeur comme une autre, et peut être stockée dans une variable !


## `.map()`

* Pareil, mais avec un return qui push dans un array

* Pratique pour chaîner !

* Test avec `debugger`


## `let`

* Pratique pour avoir une variable qui existe uniquement dans un block
  + `for (let index)` au lieu de `for (var index)` résoud nos problèmes

* Oui, mais ESLint ?
  + ecmaVersion 6 :sunglasses:
