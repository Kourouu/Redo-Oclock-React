/**
 * Import
 */
import React from 'react';

/**
 * Local import
 */
// Composants

// Importer le composant que vous avez fait
import Header from '../Header'; // Si index.js
import Ingredients from '../Ingredients';
import Steps from '../Steps';
// import Header from '../Header/Header'; // Si header.js
// Styles et assets
import './app.css';
import datas from '../../data/recipe';
/**
 * Code
 */

// Un composant basique,  c'est une fonction qui retourne
// du JSX. Puisque c'est une fonction, elle peut recevoir des
// paramètres / des arguments. EN React, les paramètres d'un composant
// s'appellent des "props". Ces props sont fournis sous la forme d'un objet
// Avec autant de propriétés que de paramètres.

// Puisque les props que l'on reçoit sont un objet, on peut utiliser
// la "destructuration" pour récupérer directement sous forme de variables
// les propriétés qui nous intéressent

// Ex: const Component = ({ title, message }) => (

// Je dispose maintenant d'une variable title et une message
// correspondant à props.title, et props.message

// <Component title="Titre" message="Salut et bienvenue"  />

const App = () => (
  <div id="app">
    <Header
      name={datas.name}
      author={datas.author}
      difficulty={datas.difficulty}
      thumbnail={datas.thumbnail}
    />
    <Ingredients ingredients={datas.ingredients} />
    <Steps steps={datas.instructions} />
  </div>
);

/**
 * Export
 */
export default App;
