import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const Nav = ({categories, onItemClick}) => (
  <header className="blog-header">
    <ul>
      {
        categories.map(category => (
          <li key={category}>
            {/* J'execute la fonction onItemClick et je lui passe en param
            le nom de la catégorie. Cette fonction me renvoie une nouvelle
            fonction, qui sera celle executée au click */}
            <a href="#" onClick={onItemClick(category)}>
              {category}
            </a>
          </li>
        ))
      }
    </ul>
  </header>
);

Nav.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
};

export default Nav;
