import React from 'react';
import PropTypes from 'prop-types';


const Counter = ({ count }) => {
  const tasks = count > 1 ? 'tâches' : 'tâche';
  return (
    <div id="todo-counter">
      <p>{ count } { tasks } en cours</p>
    </div>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Counter;
