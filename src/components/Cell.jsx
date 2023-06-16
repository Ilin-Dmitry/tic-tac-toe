import React, {useEffect, useState} from 'react';
import {cellsArray} from "../utils/cellsArray";

const Cell = ({number, onClick, isChecked}) => {
  // console.log(number, isChecked)
  const [isClicked, setIsClicked] = useState(false);
  const [sign, setSign] = useState('')
  function clickCell() {
    onClick(number)
    setIsClicked(true)
  }

  useEffect(() => {
    isClicked && setSign('x')
    console.log('ischeked',isChecked)
  }, [isClicked])
  return (
      <button className="game__button" onClick={clickCell}>{sign}</button>
  );
};

export default Cell;
