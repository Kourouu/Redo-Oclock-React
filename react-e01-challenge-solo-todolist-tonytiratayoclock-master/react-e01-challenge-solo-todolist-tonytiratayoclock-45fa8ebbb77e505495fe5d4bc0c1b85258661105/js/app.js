/**
 * Todolist
 */
var app = {
  init: function() {
    var toDoArray = [];
    var counter = toDoArray.length;
    var todo = document.getElementById('todo');
    var input = document.createElement('input');
    input.setAttribute('id',"input");
    input.setAttribute('type',"input");
    todo.appendChild(input);
    input.placeholder = "Ajouter une tâche";
    input.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') {
        var ToDoList = document.getElementById('to-do-container');
        var task = document.createElement('div');
        task.className= "to-do-card";
        taskCheckBox = document.createElement('input');
        taskCheckBox.setAttribute('type', 'checkbox');
        taskCheckBox.addEventListener('change', function(e) {
          e.target.parentNode.classList.toggle('done');
          if(e.target.checked) {
            refreshCounter('dec');
          } else {
            refreshCounter('inc');
          }
        })
        task.appendChild(taskCheckBox);
        var taskSpan = document.createElement('span');
        taskSpan.textContent = e.target.value;
        e.target.value = "";
        task.appendChild(taskSpan);
        toDoArray.push(task);
        refreshCounter('inc');
        ToDoList.appendChild(task);
      };
    });

    var refreshCounter = function(incordec) {
      incordec == 'inc' ? counter ++ : counter--;
      toDoListTitle.textContent = `${counter} tâches en cours`;
    }

    var toDoList = document.createElement('div');
    toDoList.className = "to-do-list";
    var toDoListTitle = document.createElement('div');
    toDoListTitle.className = "to-do-list-counter";
    toDoListTitle.textContent = `${counter} tâches en cours`;
    var toDoListCardContainer = document.createElement('div');
    toDoListCardContainer.setAttribute('id', 'to-do-container');

    toDoList.appendChild(toDoListTitle);
    toDoList.appendChild(toDoListCardContainer);
    todo.appendChild(toDoList);
  },

  addTaskInToDo: function(toDoName) {
    var ToDoList = document.getElementById('to-do-container');
    var task = document.createElement('div');
    task.textContent = toDoName;
    ToDoList.appendChild(task);
  }
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.init);

