/**
 * Import
 */
import React, { Component } from 'react';

/**
 * Local import
 */
// Composants
import Input from '../Input';
import Counter from '../Counter';
import Todos from '../Todos';
// Styles et assets
import './style.css';

/**
 * Code
 */

const datas = [
  {
    text: 'Faire une todolist en js',
    done: true,
    favorite: false,
  },
  {
    text: 'Faire une todolist en React',
    done: true,
    favorite: false,
  },
  {
    text: 'Manger',
    done: false,
    favorite: false,
  },
  {
    text: 'Mangerun burger aux maroilles',
    done: true,
    favorite: false,
  },
  {
    text: 'Mater un film Netflix',
    done: true,
    favorite: false,
  },
];

// On utilise un composant en class dés qu'on a besoin d'utiliser le state
// Le state est un objet surveillé par React. Dés que je ferais des modifications
// dessus, tous les composants et tout mon code qui l'utilisent seront automatiquement
// mis à jour à la moindre modif.

class App extends Component {
  state = {
    todoList: datas,
    inputValue: '',
  }

  count = () => {
    // J'ai besoin de filtrer les todos pour ne garder que les !done
    const filtered = this.state.todoList.filter(todo => !todo.done);
    // Et de retourner la longueur des todos !done
    return filtered.length;
  }

  saveTodo = () => {

    const text = this.state.inputValue;
    // Je vérifie que mon texte n'est pas vide
    if (text.trim() === '') {
      return;
    }

    // Trouver une façon de rajouter ma todo dans le state
    const todo = {
      text,
      done: false,
      favorite: false,
    };

    // Je veux créer un tableau qui contient l'ancien
    // et lui rajouter la nouvelle todo

    // old way
    // const newTodos = this.state.todoList;
    // newTodos.push(todo);

    // new way

    const newTodos = [todo, ...this.orderTodos()];

    // Le setState me permet via un objet
    // de spécifier la propriété du state que je veux modifier
    // et de lui donner une nouvelle valeur
    this.setState({
      todoList: newTodos,
      inputValue: '',
    });
  }

  changeInputValue = (text) => {
    this.setState({
      inputValue: text,
    });
  }

  onTaskClick = data => () => {
    // Je reçois dans le paramètre data
    // l'index de la todo checkée

    // Parcourir les todos existantes et modifier celle 
    // avec le bon index pour inverser son état done
    // J'ai besoin d'un nouveau tableau de todos, mis à jour
    // pour modifier mon state avec

    const newTodos = this.orderTodos().map((todo, index) => {
      // Si je suis sur la todo qui a besoin de changer
      if (data === index) {
        // la changer
        // Il est primordial de spreader en premier les anciennes valeurs
        // pour écraser ensuite aves les nouvelles
        return {
          ...todo,
          done: !todo.done,
        };
      }

      // Sinon, je retourne la todo telle quelle
      return todo;
    });


    // newTodos contient maintenant le même tableau qu'avant,
    // mais la todo checkée a été modifiée pour inverse son .done

    // Je modifie le state avec tableau de todos à jour
    this.setState({
      todoList: newTodos,
    });
  }

  onTaskRemove = data => (event) => {
    event.preventDefault();
    // Je reçois en paramètre l'index de la todo a retirer
    // Je peux en fait filtrer mes todos et retirer celle qui a l'index en question
    const newTodos = this.orderTodos().filter((todo, index) => index !== data);
    this.setState({
      todoList: newTodos,
    });
  }

  onTaskFav = data => (event) => {
    event.preventDefault();
    // Je veux modifier la todo avec l'index fourni
    // pour lui ajouter une propriété "favorite" à true, ou a false
    const newTodos = this.orderTodos().map((todo, index) => {
      // Si l'index (data) reçu en paramètre est égal à l'index que je suis
      // en train de manipuler dans le map, alors je veux renvoyer une todo modifiée
      if (data === index) {
        return {
          ...todo,
          favorite: !todo.favorite,
        };
      }
      // Je retourne la todo originale
      return todo;
    });

    // Je n'ai pluis qu'à mettre à jour le state avec ce nouveau tableau
    this.setState({
      todoList: newTodos,
    });
  }

  orderTodos = () => {
    // revient à écrire const todoList = this.state.todoList;
    const { todoList } = this.state;
    // je veux dans l'ordre 
    // les todos favorites et non done
    const favAndNotDone = todoList.filter(todo => todo.favorite && !todo.done);
    // les todos non done
    const notDone = todoList.filter(todo =>  !todo.favorite && !todo.done);
    // les todos done
    const done = todoList.filter(todo => todo.done);
    // Je mets dans un nouveau tableau les résultats dans l'ordre attendu
    return [...favAndNotDone, ...notDone, ...done];
  }

  render() {
    return (
      <div id="todo">
        <Input
          saveTodo={this.saveTodo}
          inputValue={this.state.inputValue}
          onInputChange={this.changeInputValue}
        />
        <Counter count={this.count()} />
        <Todos
          list={this.orderTodos()}
          onTaskClick={this.onTaskClick}
          onTaskRemove={this.onTaskRemove}
          onTaskFav={this.onTaskFav}
        />
      </div>
    );
  }
}

/**
 * Export
 */
export default App;
