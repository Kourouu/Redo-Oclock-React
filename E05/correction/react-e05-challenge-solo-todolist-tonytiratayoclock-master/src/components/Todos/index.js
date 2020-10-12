import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const Todos = ({ list, onTaskClick, onTaskRemove, onTaskFav }) => (
  <ul id="todos-list">
    {
      list.map((data, index) => (
        <Todo
          key={index}
          favorite={data.favorite}
          index={index}
          label={data.text}
          done={data.done}
          onTaskClick={onTaskClick}
          onTaskRemove={onTaskRemove}
          onTaskFav={onTaskFav}
        />
      ))
    }
  </ul>
);

Todos.propTypes = {
  list: PropTypes.array.isRequired,
}

export default Todos;
