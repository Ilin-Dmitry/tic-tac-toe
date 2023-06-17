import React, {useEffect, useState} from 'react';

const Cell = ({number, onClick, isChecked}) => {
  const [isClicked, setIsClicked] = useState(false);
  const [sign, setSign] = useState('')
  function clickCell() {
    onClick(number)
    setIsClicked(true)
  }


  // Проверить необходимость эффекта - setSign можно перенести в clickCell
  useEffect(() => {
    isClicked && setSign('x')
    console.log('ischeked',isChecked)
  }, [isClicked])
  return (
      <button className="game__button" onClick={clickCell}>{sign}</button>
  );
};

export default Cell;
