import React, {useEffect, useState} from 'react';
import Cell from "./Cell";

const Game = () => {
  const [cellsArray, setCellsArray] = useState([
    {key: 1, isChecked: false},
    {key: 2, isChecked: false},
    {key: 3, isChecked: false},
    {key: 4, isChecked: false},
    {key: 5, isChecked: false},
    {key: 6, isChecked: false},
    {key: 7, isChecked: false},
    {key: 8, isChecked: false},
    {key: 9, isChecked: false},
  ])

  const [isClicked, setIsClicked] = useState(false)

 useEffect(() => {
   setIsClicked(false)
 }, [isClicked])

  function clickCell(num) {
    const newCellsArray = cellsArray;
    newCellsArray[num-1].isChecked = true;
    setCellsArray(newCellsArray)
    setIsClicked(true)
  }

  return (
      <div className="game">
        {cellsArray.map(cell => {
            return <Cell key={cell.key} number={cell.key} isChecked={cell.isChecked} onClick={clickCell}/>
          })}
      </div>
  );
};

export default Game;
