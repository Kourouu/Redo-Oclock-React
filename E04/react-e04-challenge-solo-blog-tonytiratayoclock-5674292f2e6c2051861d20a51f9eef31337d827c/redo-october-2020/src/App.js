import React from 'react';
import './App.css';

import categoriesListArray from './data/categories';
import postsListArray from './data/posts';


import Navigation from './components/Navigation';
import Articles from './components/Articles';

class App extends React.Component {

  state = {
    category: 'Accueil',
  };

  onElemClick = (elem) => {
    return () => {
      this.setState({
        category: elem,
      })
    };
  }

  filterPosts = () => {
    console.log(this.state.category);
    return this.state.category === 'Accueil' ? postsListArray : postsListArray.filter(post => post.category === this.state.category)
  };

  render() {
    return (
      <div className="App">
          <Navigation categories={categoriesListArray} onItemClick={this.onElemClick} />
        <Articles posts={this.filterPosts()} />
      </div>
    );
  }
  }

export default App;
