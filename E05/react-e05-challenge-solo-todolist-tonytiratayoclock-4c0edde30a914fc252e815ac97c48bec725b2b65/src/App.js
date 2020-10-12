import React from 'react';
import './App.css';

import Input from './Input/Input';
import Counter from './Counter/Counter';
import ToDoList from './ToDoList/ToDoList';


class App extends React.Component {

  state = {
    toDos: [
      {
        id: 1,
        name: 'Faire une To Do List en React',
        check: false,
      },
      {
        id: 2,
        name: 'Mettre en place la validation des tasks',
        check: false,
      },
    ],
  }

  handleSubmit = (evt) => {
    if (evt.keyCode === 13) {
    this.setState({
      ...this.state,
      toDos: [
        ...this.state.toDos,
        {
          id: this.state.toDos.length + 1,
          name: evt.target.value,
          check: false,
        },
      ]
    })
    }
  }

  handleCheckBoxClick = (task) => {
    let taskId = task.target.className.split('checkbox-')[1];

    const newTodos = this.state.toDos.map(todo => {
      if(todo.id == taskId) {
          return {
            ...todo,
            check: !todo.check,
          }
      } else {
        return todo
      }
    });

    this.setState({
      ...this.state,
      toDos: newTodos
    });
  }

  render() {
    return (
      <div>
        <Input onInputSubmit={this.handleSubmit}/>
        <Counter counter={this.state.toDos.filter(todo => todo.check === false).length}/>
        <ToDoList array={this.state.toDos} onCheckboxClick={this.handleCheckBoxClick} />
      </div>
    );
  }
}

export default App;
