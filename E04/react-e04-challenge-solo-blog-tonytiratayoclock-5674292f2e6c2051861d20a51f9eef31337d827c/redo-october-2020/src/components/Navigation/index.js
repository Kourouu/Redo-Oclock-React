import React from 'react';

const Navigation = ({categories, onItemClick}) => {
	return (
		<div className="navigation">
			<ul className="categories-list">
				{categories.map(category => (
						<li key={category}>
							<a href="#" onClick={onItemClick(category)}>{category}</a>
						</li>
				))}
			</ul>
		</div>
	);
};

export default Navigation;