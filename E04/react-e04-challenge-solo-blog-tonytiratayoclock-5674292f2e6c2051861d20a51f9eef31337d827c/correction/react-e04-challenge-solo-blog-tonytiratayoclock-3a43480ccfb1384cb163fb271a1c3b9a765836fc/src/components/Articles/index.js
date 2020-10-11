import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

import './index.css';

// Props représente toujours l'objet qui contient
// LE ou LES paramètres fournis au composant

// Ici props a une seule propriété: "posts"

// const Articles = (props) => (

// Avec la syntaxe cid essus, pour accéder aux différents
// props je dois utilise "props.posts" ou "props.tarteaufraise"

// const Articles = ({ posts, tarteautfraise}) => (

// Ici on "desutructure" les props pour ne garder que
// les propriétés qui nous intéressent

// <Article
// key={`article${index}`}
// { ...article }
// />

// Quand on veut donner des props à un composants
// correspondants aux propriétés d'un objet
// on peut utiliser la déstructuration pour 
// utiliser le nom des propriétés et les donner en tant
// que props

// <Article
// key={`article${index}`}
// title={article.title}
// excerpt={articdle.excerpt}
// />

const Articles = ({ posts }) => (
  <main className="blog-posts">
    {
      posts.map(article => (
        <Article
          key={article.id}
          {...article}
        />
      ))
    }
  </main>
);

Articles.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.object.isRequired,
  ).isRequired,
};

export default Articles;
