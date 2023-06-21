import React, {useEffect, useState} from 'react';
import Cell from "./Cell";
import {checkVictoryConditions} from "../utils/checkWin";

const Game = () => {
  const [cellsArray, setCellsArray] = useState([
    {key: 1, isChecked: false, sign: ''},
    {key: 2, isChecked: false, sign: ''},
    {key: 3, isChecked: false, sign: ''},
    {key: 4, isChecked: false, sign: ''},
    {key: 5, isChecked: false, sign: ''},
    {key: 6, isChecked: false, sign: ''},
    {key: 7, isChecked: false, sign: ''},
    {key: 8, isChecked: false, sign: ''},
    {key: 9, isChecked: false, sign: ''},
  ])

  const [isClicked, setIsClicked] = useState(false)

 useEffect(() => {
   setIsClicked(false)
 }, [isClicked])

  function checkCell(num, symbol) {
    const newCellsArray = cellsArray;
    newCellsArray[num].isChecked = true;
    newCellsArray[num].sign = symbol;
    setCellsArray(newCellsArray)
    setIsClicked(true)
  }

  function clickCell(num) {
    checkCell(num - 1, 'x' + ' ' + num) // убрать последний num
    checkVictoryConditions(cellsArray)
    setCountermove()
  }

  function finishGame() {
    console.log('game over')
  }

  function setCountermove() {
    const freeCellsArray = cellsArray.filter(cell => {
      return (cell.isChecked === false)
    })

    const randomFreeCell = freeCellsArray[Math.floor(Math.random()*freeCellsArray.length)]
    if (randomFreeCell) {
      checkCell(randomFreeCell.key - 1, 'o' + ' ' + randomFreeCell.key) // убрать последний randomFreeCell.key
      checkVictoryConditions(cellsArray)
    } else {
      finishGame()
    }
  }



  return (
      <div className="game">
        {cellsArray.map(cell => {
            return <Cell key={cell.key} number={cell.key} symbol={cell.sign} onClick={clickCell}/>
          })}
      </div>
  );
};

export default Game;
