import React, {useEffect, useState} from 'react';

const Cell = ({number, onClick, symbol, winCells}) => {
  const [color, setColor] = useState('')
  useEffect(() => {
    setColor(() => {
      if (winCells.includes(number)) return 'game__button_color_red'
      else if (symbol === 'x') return 'game__button_color_green'
      else if (symbol === 'o') return 'game__button_color_blue'
      else return ''
    })
  }, [symbol, winCells])


  function clickCell() {
    onClick(number)
  }

  return (
      <button className={`game__button ${color}`} onClick={clickCell}><p>{symbol}</p></button>
  );
};

export default Cell;
