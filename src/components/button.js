import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CalcButton extends Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  render() {
    const { keyValue, className, handleClick } = this.props;
    return (
      <button type="button" className={className} onClick={handleClick}>
        {keyValue}
      </button>
    );
  }
}

CalcButton.propTypes = {
  keyValue: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default CalcButton;
