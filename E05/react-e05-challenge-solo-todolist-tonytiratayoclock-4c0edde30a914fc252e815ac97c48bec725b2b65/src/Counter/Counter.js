import React from 'react';
import PropTypes from 'prop-types';

import './index.css';



const Counter = ({counter}) => {

    return (
      <div>
          {counter} tâches en cours
      </div>
    );
  }

Counter.propTypes = {
    counter: PropTypes.number.isRequired,
};

export default Counter;