
// importer react
import React from 'react';
import PropTypes from 'prop-types';
// Import ton css
import './style.css';
// Faire une fonction qui retourne le JSX

// Pour donner du style à un composant React
// Je dois lui donner un objet
// Un objet, c'est du js, donc j'ai aussi besoin de { } autour
// pour interpreter l'objet

// L'objet styla a autant de propréités que de valeurs css à modifier
// On fourni le texte css qu'on veut changer sous forme de string
// Si on souhaite utiliser une variable dans une string en JS
// il faut utiliser le caractère `` et entourer nos varaibles de
// ${nomDeLaVariable}

const Header = ({
  name, thumbnail, author, difficulty,
}) => (
  <div
    id="header"
    style={{
      backgroundImage: `url(${thumbnail})`,
    }}
  >
    <div>
      <h1>{ name }</h1>
      <span>{ author }</span> - <span>{ difficulty }</span>
    </div>
  </div>
);

// Ici je veux valider les props de mon Header
// Un propType permet de valider le type d'un prop.
// Je donne un objet représentant les validations.
// Cet objet doit posséder une propriété par prop à valider
// ET en valeur, le type attendu pour ce prop (la validation à faire)


Header.propTypes = {
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
};

// Exporter le composant
export default Header;
