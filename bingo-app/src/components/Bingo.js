import React from 'react';
import PropTypes from 'prop-types'


function Bingo({number}) {
  return (
    <a className="box">
      <div className="is-size-4 has-text-centered has-text-weight-semibold">
        {number}
      </div>
    </a>
  );
}

Bingo.propTypes = {
  number: PropTypes.number.isRequired,
};

Bingo.defualtProps = {
  number: 0,
}

export default Bingo;
