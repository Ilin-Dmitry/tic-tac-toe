import React from 'react';

const Cell = ({number, onClick, symbol}) => {
  function clickCell() {
    onClick(number)
  }

  return (
      <button className="game__button" onClick={clickCell}>{symbol}</button>
  );
};

export default Cell;
