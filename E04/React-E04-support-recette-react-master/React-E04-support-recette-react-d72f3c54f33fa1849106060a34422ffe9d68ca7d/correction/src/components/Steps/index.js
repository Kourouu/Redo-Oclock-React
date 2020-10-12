
// importer react
import React from 'react';
// Import ton css
import './style.css';
// Faire une fonction qui retourne le JSX

// TOUS les éléments réptés dans react
// doivent comporter une propriété "key"
// avec une valeur UNIQUE

const Steps = ({ steps }) => (
  <div id="steps">
    { steps.map((step, index) => (
      <div key={ 'step' + index }>
        <span className="number">{index + 1} </span>
        <span className="text">{step}</span>
      </div>
    )) }
  </div>
);
// Exporter le composant
export default Steps;
