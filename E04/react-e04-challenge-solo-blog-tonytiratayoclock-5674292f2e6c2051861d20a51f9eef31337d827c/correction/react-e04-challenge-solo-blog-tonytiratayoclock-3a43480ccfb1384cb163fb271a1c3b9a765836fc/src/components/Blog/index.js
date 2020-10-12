import React, { Component } from 'react';
import './index.css';


import categoriesArray from '../../data/categories';
import postsArray from '../../data/posts';

// Import des mes composants
import Nav from '../Nav';
import Articles from '../Articles';
import Footer from '../Footer';

// Le composant Blog utilise le composant Nav.
// Dans React, pour faire passer des datas, on utlise des Props
// Le composant Blog ici donne un prop "categories" ayant comme valeur
// "categoriesArray" 'le tableau)

// En JSX, dés que je veux utiliser du js normal, je dois le mettre entre {}


// Notre app Blog était un composant simple.
// Il était généré par une fonction -> "dumb components"
// Pour pouvoir utliser un système de "state" 
// (garder des infos en mémoire et les partager aux composants)
// on va avoir besoin d'un nouveau type de composant:
// Les containers (ou les smart Components)

// const Blog = () => (
//   <div className="blog">
//     <Nav categories={categoriesArray} />
//     <Articles posts={postsArray} />
//     <Footer />
//   </div>
// );


// Pour faire d'un composant React un smart Component
// On va devoir le transformer de fonction en Class

class Blog extends Component {
  state = {
    category: 'Accueil',
  };

  // Syntaxe courte

  // onNavClick = (category) => () => {
  //     console.log(category);
  // }

  // Syntaxe longue
  onNavClick = (nomDeLaCategorie) => {
    // Je crée une fonction, que je souhaite
    // executer à chaque clic sur un élément de nav
    // Je vais pouvoir passer cette fonction aux composants
    // pour qu'ils puissent l'utiliser
    // this.setState({
    //   category,
    //   // revient à écrire: category: category
    // });

    // onNavClick va être executée dans le composant Nav et recevra la category
    // A partir de là, on peut donc renvoyer une fonction, à executer au clic
    // et donner à cette nouvelle fonction la categorie utilisée

    return () => {
      this.setState({
        category: nomDeLaCategorie,
      })
    }
  }

  filterPosts = () => {
    // Un .filter envoi un tableau avec des éléments filtrés
    if (this.state.category === 'Accueil') {
      return postsArray;
    }
    return postsArray.filter(post => post.category === this.state.category);
  }

  render() {
    console.log(this.state);
    return (
      <div className="blog">
        <Nav categories={categoriesArray} onItemClick={ this.onNavClick } />
        <Articles posts={this.filterPosts()} />
        <Footer />
      </div>
    );
  }
}

export default Blog;
