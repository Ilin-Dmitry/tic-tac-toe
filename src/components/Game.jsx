import React, {useEffect, useState} from 'react';
import Cell from "./Cell";
import {checkVictoryConditions} from "../utils/checkWin";
import {moveToWin} from "../utils/winStrategy";

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

  function markCell(num, symbol) {
    const newCellsArray = cellsArray;
    newCellsArray[num].isChecked = true;
    newCellsArray[num].sign = symbol;
    setCellsArray(newCellsArray)
    setIsClicked(true)
  }

  function clickCell(num) {
    markCell(num - 1, 'x')
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
      const xCells = cellsArray.map(cell => {
        if (cell.isChecked && cell.sign.startsWith('x')) return cell.key
      }).filter(Boolean)
      const oCells = cellsArray.map(cell => {
        if (cell.isChecked && cell.sign.startsWith('o')) return cell.key
      }).filter(Boolean)
      const move = moveToWin(freeCellsArray, xCells, oCells) - 1
      markCell(move, 'o')
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
