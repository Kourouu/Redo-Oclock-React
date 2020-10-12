import React from 'react';
import PropTypes from 'prop-types';

import './index.css';



const Input = ({onInputSubmit}) => {

    return (
      <div>
          <input onKeyUp={onInputSubmit} />
      </div>
    );
}

Input.propTypes = {
    onInputSubmit: PropTypes.func.isRequired,
};

export default Input;
