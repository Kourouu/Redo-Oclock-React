import React from 'react';
import PropTypes from 'prop-types';

// Dans tous les composants "function" (stateless, ou dumComponent)
// On ne peut interagir avec l'exterieur que via les props
// Les props me permettent soit de recevoir des "datas" (un array de qqchose, un objet)
// mais aussi des fonctions à executer

const Input = ({ saveTodo, inputValue, onInputChange }) => {
  const handleSubmit = (event) => {
    // J'empeche le reload de la page
    event.preventDefault();
    // Prevenir mon application
    // Qu'une todo a été ajoutée et lui donner
    // le texte

    // Event.currentTrget représente mon form
    // childNodes[0] représente le premier enfant du form
    // CAD -> L'input
    // Plus besoin de la ligne ci dessous car géré par App
    // const input = event.currentTarget.childNodes[0];
    // Faire savoir à l'app le texte de la todo à créer
    // saveTodo arrive par mes props et est gérée par mon composant App
    // C'est une fonction qui attend que je lui donne le texte de la todo à ajouter
    saveTodo();
    

  };

  const handleChange = (evt) => {
    // Le composant Input se charge lui même de récupérer la valeur
    // grâce à l'événement. Une fois la valeur récupérée, il la passe
    // à son parent grâce à la fonction fournie en props
    onInputChange(evt.target.value);
  }

  return (
    <form
      id="todo-form"
      onSubmit={handleSubmit}
    >
      <input
        id="todo-input"
        placeholder="Ajouter une Tâche"
        value={inputValue}
        onChange={handleChange}
      />
    </form>
  );
};

Input.propTypes = {
  saveTodo: PropTypes.func.isRequired,
};

export default Input;
