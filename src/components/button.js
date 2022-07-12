import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import getText from '../element';

class CalcButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick( {target} ) {

    return target.textContent;
  }

  render() {
    const { keyValue, className } = this.props;
    return (
      <button type="button" className={className} onClick={this.handleClick}>
        {keyValue}
      </button>
    );
  }
}

CalcButton.propTypes = {
  keyValue: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  // handleClick: PropTypes.func.isRequired,
};

export default CalcButton;
