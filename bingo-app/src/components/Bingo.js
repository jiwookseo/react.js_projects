import React from 'react';
import PropTypes from 'prop-types'


function Bingo({number}) {
  return (
    <div className="">
      <div className="">
        {number}
      </div>
    </div>
  );
}

Bingo.propTypes = {
  number: PropTypes.number.isRequired,
};

Bingo.defualtProps = {
  number: 0,
}

export default Bingo;
