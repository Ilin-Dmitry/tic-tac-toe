import React, {useEffect, useState} from 'react';
import Cell from "./Cell";
import {checkVictoryConditions} from "../utils/checkWin";
import {moveToWin} from "../utils/winStrategy";
import {defaultCells} from "../utils/defaultCells";

const Game = ({onFinish, winner, setWinner}) => {
  const [cellsArray, setCellsArray] = useState(defaultCells)

  const [isClicked, setIsClicked] = useState(false)
  const [gameOver, setGameOver] = useState(false)

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

    if (!winner && cellsArray[num-1].isChecked === false) {
      markCell(num - 1, 'x')
      checkVictoryConditions(cellsArray, defineWinner)
      setCountermove()
    }
  }

  function defineWinner (winner) {
    setGameOver(true)
    onFinish()
    setWinner(winner)
  }

  function finishGame() {
    setGameOver(true)
    onFinish()
    setWinner('draw')
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
      checkVictoryConditions(cellsArray, defineWinner)
    } else {
      finishGame()
    }
  }

  return (
      <div>
        {gameOver && <h1>{winner}</h1>}
        <div className="game">
          {cellsArray.map(cell => {
            return <Cell key={cell.key} number={cell.key} symbol={cell.sign} onClick={clickCell}/>
          })}
        </div>
      </div>
  );
};

export default Game;
