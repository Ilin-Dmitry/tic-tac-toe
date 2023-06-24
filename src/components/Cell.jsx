import React, {useEffect, useState} from 'react';

const Cell = ({number, onClick, symbol}) => {

  const [color, setColor] = useState('')
  useEffect(() => {
    setColor(() => {
      if (symbol === 'x') return 'game__button_color_green'
      else if (symbol === 'o') return 'game__button_color_blue'
      else return ''
    })
  }, [symbol])


  function clickCell() {
    onClick(number)
  }

  return (
      <button className={`game__button ${color}`} onClick={clickCell}>{symbol}</button>
  );
};

export default Cell;
