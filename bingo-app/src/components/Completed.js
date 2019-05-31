/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react'

const Completed = ({ player1, player2, onEnd, index }) => {
  const length1 = player1.get('completed').toJS().length;
  const length2 = player2.get('completed').toJS().length;
  if (length1 >= 5 || length2 >= 5){
    onEnd({length1, length2});
  }
  const player = index === 1 ? player1 : player2;
  const completedList = player.get('completed').toJS()
    .concat(['', '', '', '', ''])
    .slice(0, 5)
    .map((completed, i) => {
      const classNames = completed !== '' ? "column tag is-info is-size-5 has-text-weight-semibold" : "column box is-size-5 has-text-weight-semibold"
      return(
        <div
          className={classNames}
          style={{ minHeight: "5rem", height: "5vw", width: '100%', margin: "0.5rem 0.3rem"}}
          key={`${index}P-${completed + i}-completed`}
        >
          {completed}
        </div>
      )}
    );
  return (
    <div className="columns has-text-centered is-mobile">
      <div 
        className="column tag is-info is-size-5 has-text-weight-semibold"
        style={{ minHeight: "5rem", height: "5vw", width: '100%', margin: "0.5rem 0.3rem"}
      }
      >빙고!
      </div>
      {completedList}
    </div>
  );
}

export default Completed;
