/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types'


const Bingo = ({number, onSelect, index, check}) => {
  const classNames = check ? "button is-info" : "button"
  return (
    <button 
      className={classNames}
      onClick={() => onSelect({number, index})}
      type="button"
      style={{ minHeight: "5rem", height: "7vw", width: "95%", margin: "2% 5%"}}
    >
      <div
        className="is-size-5 has-text-centered has-text-weight-semibold"
      >
        { number || "" }
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
