import { Component } from 'react';
// import PropTypes from 'prop-types';
import calculate from '../logic/calculate';
import Result from './result';
import CalcButton from './button';

const btnValue = [
  {
    name: 'AC',
    class: 'functionalTop',
  },
  {
    name: '+/-',
    class: 'functionalTop',
  },
  {
    name: '%',
    class: 'functionalTop',
  },
  {
    name: '÷',
    class: 'functional',
  },
  {
    name: '7',
    class: 'input',
  },
  {
    name: '8',
    class: 'input',
  },
  {
    name: '9',
    class: 'input',
  },
  {
    name: 'x',
    class: 'functional',
  },
  {
    name: '4',
    class: 'input',
  },
  {
    name: '5',
    class: 'input',
  },
  {
    name: '6',
    class: 'input',
  },
  {
    name: '-',
    class: 'functional',
  },
  {
    name: '1',
    class: 'input',
  },
  {
    name: '2',
    class: 'input',
  },
  {
    name: '3',
    class: 'input',
  },
  {
    name: '+',
    class: 'functional',
  },
  {
    name: '0',
    class: 'zero',
  },
  {
    name: '.',
    class: 'input',
  },
  {
    name: '=',
    class: 'functional',
  },
];

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: 0,
      operation: null,
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress({ target }) {
    this.setState((state) => calculate(state, target.innerText));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="wrapper">
        <div className="resultWrapper">
          <Result
            total={total}
            next={next}
            operation={operation}
          />
        </div>
        <div className="keyPad">
          {btnValue.map((btn) => (
            <CalcButton
              keyValue={btn.name}
              key={btn.name}
              className={btn.class}
              handleClick={this.onButtonPress}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Calculator;
