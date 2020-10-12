import React from 'react';
import PropTypes from 'prop-types';

import './index.css';



const ToDoList = ({array, onCheckboxClick}) => {
	return (
		<div>
			{array.map(task => (
				<div key={task.id} id={"task-"+ task.id} className="task">
					<input key={task.id} className={"checkbox-" + task.id}type="checkbox" onClick={onCheckboxClick}/>
					<div className="task-title">{task.name}</div>
				</div>
			))}
		</div>
	);
  }

ToDoList.propTypes = {
	array: PropTypes.array.isRequired,
	onCheckboxClick: PropTypes.func.isRequired,
};

export default ToDoList;