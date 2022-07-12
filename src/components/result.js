import PropTypes from 'prop-types';

const Result = ({ total, operation, next }) => (
  <div className="result">
    {total}
    {operation}
    {next}
  </div>
);

const setPropTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.any,
  PropTypes.number,
]);

Result.propTypes = {
  next: setPropTypes,
  total: setPropTypes,
  operation: setPropTypes,
};

Result.defaultProps = {
  next: null,
  total: null,
  operation: null,
};

export default Result;
