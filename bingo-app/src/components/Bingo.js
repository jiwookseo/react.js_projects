/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types'


const Bingo = ({number, onSelect, index, check}) => {
  const bg = check ? "column is-one-fifth BingoCell button is-danger" : "column is-one-fifth BingoCell button"
  return (
    <button 
      className={bg}
      onClick={() => onSelect({number, index})}
      type="button"
      style={{ 
        margin: "0",
        minHeight: "4.5rem",
      }}
    >
      <div
        className="is-size-5 has-text-centered has-text-weight-semibold"
      >
        {number}
      </div>
    </button>
  );
};

Bingo.propTypes = {
  number: PropTypes.number,
  onSelect: PropTypes.func,
  index: PropTypes.number,
  check: PropTypes.bool,
};

Bingo.defaultProps = {
  index: 0,
  number: 0,
  check: false,
  onSelect: () => console.warn('onSelect not defined'),
}

export default Bingo;
