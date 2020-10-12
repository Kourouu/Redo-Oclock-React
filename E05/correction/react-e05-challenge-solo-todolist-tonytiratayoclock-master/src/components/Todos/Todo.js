import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FaStar, FaRegStar, FaTrashAlt } from 'react-icons/fa';

const Todo = ({ label, done, onTaskClick, onTaskRemove, onTaskFav, index, favorite }) => {
  
  return (
    <li className={classNames({
      todo: true,
      'todo--done': done,
      'todo--fav': favorite,
    })}>
      <input
        checked={done}
        type="checkbox"
        className="todo-check"
        onChange={onTaskClick(index)}
      />
      <span className="todo-text">{label}</span>
      <div className="todo-actions">
        <a href="" onClick={onTaskFav(index)}>
          {favorite ? <FaStar /> : <FaRegStar />}
        </a>
        <a href="" onClick={onTaskRemove(index)}>
          <FaTrashAlt />
        </a>
      </div>
    </li>
  );
};

Todo.propTypes = {
  label: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
};

export default Todo;
