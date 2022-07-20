import { useState } from 'react';
import calculate from '../logic/calculate';
import Result from './result';
import CalcButton from './button';
import styles from './Calculator.module.css';

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

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: 0,
    operation: null,
  });

  const onButtonPress = ({ target }) => {
    setState((state) => calculate(state, target.innerText));
  };

  const { total, next, operation } = state;
  const text = 'Let\'s do something';
  return (
    <div className={styles.pageWrapper}>
      <h2 className={styles.text}>
        {text}
      </h2>
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
              handleClick={onButtonPress}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
