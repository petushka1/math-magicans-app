import PropTypes from 'prop-types';

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
    name: '/',
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

const CalcButton = ({ keyValue, className }) => (
  <span className={className} type="button">{keyValue}</span>
);

CalcButton.propTypes = {
  keyValue: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

const Calculator = () => (
  <div className="wrapper">
    <span className="result">
      0
    </span>
    <div className="keyPad">
      {btnValue.map((btn) => (
        <CalcButton
          key={btn.name}
          keyValue={btn.name}
          className={btn.class}
        />
      ))}
    </div>
  </div>

);

export default Calculator;
