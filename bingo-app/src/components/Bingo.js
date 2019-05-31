/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types'


function Bingo({number, onSelete}) {
  return (
    <button className="column is-one-fifth box BingoCell" onClick={() => onSelete()} type="button">
      <div className="is-size-6 has-text-centered has-text-weight-semibold">
        {number}
      </div>
    </button>
  );
};

Bingo.propTypes = {
  number: PropTypes.string,
  onSelete: PropTypes.func,
};

Bingo.defaultProps = {
  number: 0,
  onSelete: () => console.warn('onSelete not defined'),
}

export default Bingo;
