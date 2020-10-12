
// importer react
import React from 'react';
import PropTypes from 'prop-types';
// Import ton css
import './style.css';
// Faire une fonction qui retourne le JSX
// ingredients est un tableau d'objets "ingredient"
// react ne sait pas afficher un objet
// On utilise le .map pour transformer chacun des objets
// du tableau en composant JSX que React sait afficher

const Ingredients = ({ ingredients }) => (
  <div id="ingredients">
    { ingredients.map(({ quantity, name }, index) => (
      <p key={'ingredient' + index}><span>{quantity}</span> {name}</p>
    )) }
  </div>
);

// PropTypes validation
Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
};
// Exporter le composant
export default Ingredients;
