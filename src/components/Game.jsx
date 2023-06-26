import React, {useEffect, useState} from 'react';
import Cell from "./Cell";
import {checkVictoryConditions} from "../utils/checkWin";
import {moveToWin} from "../utils/winStrategy";
import {defaultCells} from "../utils/defaultCells";

const Game = ({onFinish, winner, setWinner}) => {
  const [cellsArray, setCellsArray] = useState(defaultCells)

  const [isClicked, setIsClicked] = useState(false)
  const [winCells, setWinCells] = useState([])

 useEffect(() => {
   setIsClicked(false)
 }, [isClicked])

  function markCell(num, symbol) {
    const newCellsArray = defaultCells;

    newCellsArray[num].isChecked = true;
    newCellsArray[num].sign = symbol;
    setCellsArray(newCellsArray)
    setIsClicked(true)
  }

  function clickCell(num) {
    if (!winner && cellsArray[num-1].isChecked === false) {
      markCell(num - 1, 'x')
      checkVictoryConditions(cellsArray, defineWinner, defineWinCells)
      setCountermove()
    }
  }

  function defineWinner (winner) {
    onFinish()
    setWinner(winner)
  }

  function defineWinCells(winCells) {
    setWinCells(winCells)
  }

  function finishGame() {
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
      checkVictoryConditions(cellsArray, defineWinner, defineWinCells)
    } else {
      finishGame()
    }
  }

  function startNewGame() {
    setCellsArray(cellsArray.map(cell => {
      const newCell = cell
      newCell.isChecked = false
      newCell.sign = ''
      return newCell
    }))
    setWinner('')
    setWinCells([])
  }

  return (
      <div className='game-wrapper'>
        <div className="game">
          {cellsArray.map(cell => {
            return <Cell key={cell.key} number={cell.key} symbol={cell.sign} onClick={clickCell} winCells={winCells}/>
          })}
        </div>
        <button className="game__refresh-button" onClick={startNewGame}>Начать заново</button>
      </div>
  );
};

export default Game;
