/**
 * Todolist
 */

 // Programmation déclarative

 // Je déclare dans mon interface le comportement attendu
 // en fonction de datas qui me sont fournies.

const datas = [
  {
    text: 'Faire une todolist en js',
    done: true
  },{
    text: 'Faire une todolist en React',
    done: false
  },
  {
    text: 'Manger',
    done: false
  },
  {
    text: 'Mangerun burger aux maroilles',
    done: true
  },
  {
    text: 'Mater un film Netflix',
    done: true
  },
];


const app = {
  counter: datas.length,
  init: function() {
    console.log('initialisation de APP');
    app.todo = document.getElementById('todo');
    // J'efface l'eventuelle ancienne interface
    app.todo.innerHTML = '';
    // Créer le formulaire
    app.createForm();
    // Créer le compteur
    app.createCount();
    // Créer la liste
    app.createList();
  },
  createForm: function(){
    // On crée le formulaire
    const form = document.createElement('form');
    form.id = 'todo-form';
    form.addEventListener('submit', function(evt){
       // J'empêche le rechargement de la page
      evt.preventDefault();
      // Je récupère le texte dans l'input
      const inputValue = app.input.value;
      datas.push({
        text: inputValue,
        done: false,
      });
      app.init();
    });
    // on crée l'input
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'todo-input';
    input.placeholder = 'Ajouter une tâche';
    // On garde une référence à l'input
    app.input = input;
    // On met l'input dans le formulaire
    form.appendChild(input);
    // On met le formulaire dans le DOM
    app.todo.appendChild(form);
  },

  createCount: function(){
    // Je crée la div counter
    const counter = document.createElement('div');
    // Je lui ajoute un id
    counter.id = 'todo-counter';
    // Je garde une référence à ma div pour pouvoir m'en servir partout
    app.counterDOM = counter;
    // J'appelle update pour mettre à jour le compte de todos
    app.updateCount();
    // J'ajoute mon counter dans le DOM
    app.todo.appendChild(counter);
  },
  updateCount: function(){
    // Je filtre uniquement les todos avec done false
    // Le filter gardera l'élément si je renvoie true
    // Il l'enlevera si je renvoie false
    const itemsToDo = datas.filter(data => !data.done);
    const counterText = itemsToDo.length > 1 ? " taches en cours" : " tache en cours"
    app.counterDOM.textContent = itemsToDo.length + counterText;
  },
  createList: function(){
    // Je crée la liste
    const list = document.createElement('ul');
    // J'en garde une référence
    app.list = list;
    // J'u ajoute un ID
    list.id = 'todo-list';

    // Je veux générer les todos
    datas.forEach(app.generateItem);
    // Je mets la liste dans le DOM
    app.todo.appendChild(list);
  },
  addItem: function(evt){
    // J'empêche le rechargement de la page
    evt.preventDefault();
    // Je récupère le texte dans l'input
    const inputValue = app.input.value;
    // Je vérifie s'il n'est pas vide
    if(inputValue){
      // J'appelle generateItem pour le mettre dans le dom
      app.generateItem(inputValue);
      // Je vide l'input
      app.input.value = '';
      // J'augmente le counter
      app.counter++;
      // Je mets à jour l'affichage du counter
      app.updateCount();
    }
  },
  generateItem: function(data){
    // Je crée un élément de liste
    const item = document.createElement('li');
    // J'y ajoute une classe
    item.className = 'todo';
    // Vérifier si je dois ajouter la classe done, ou pas
    if(data.done){
      item.className = 'todo todo--done';
    }

    // TODO: add checkbox
    const check = document.createElement('input');
    check.type = 'checkbox';
    check.className = 'todo-check';
    check.checked = data.done;
    check.addEventListener('change', function(){
      // J'inverse l'état "done" de l'objet
      data.done = !data.done;
      app.init();
    });
    // On génere le texte à mettre dans la todo
    const text = document.createElement('span');
    // On lui met une classe
    text.className = 'todo-text';
    // On met le texte de l'input dans la li (la todo)
    text.textContent = data.text;
    // je mets mon text et ma checkbox dans le li
    item.appendChild(check);
    item.appendChild(text);
    // Je mets le li dans le ul
    app.list.appendChild(item);
  },
  checkItem: function(){
    // Récupérer le li correspondant à la checkbox
    // this représente la checkbox
    // parentNode représente la li qui la contient (la checkbox)
    const li = this.parentNode;
    // Ajouter ou retirer une classe au li pour le marquer done ou pas done
    if (li.classList.contains('todo--done')) {
    // Si classe todo--done présente
    // Faire un toogle dessus pour la retirer
      li.classList.toggle('todo--done');
      // Incrémenter le compteur car une tâche de plus à faire
      app.counter++;
    } else {
      // Sinon, ajouter la classe todo--done
      li.classList.toggle('todo--done');
      // Décrémenter le compteur
      app.counter--;
    }
    // Je mets à jour le DOM avec le nouveau compteur
    app.updateCount();
  },
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);
