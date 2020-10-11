import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ title, excerpt, category }) => (
  <article>
    <h2>{title}</h2>
    <a href="#">{category}</a>
    <p>{excerpt}</p>
  </article>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
};

export default Article;
