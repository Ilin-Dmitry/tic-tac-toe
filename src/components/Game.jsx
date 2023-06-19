import React, {useEffect, useState} from 'react';
import Cell from "./Cell";

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
    checkVictoryConditions()
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
      checkVictoryConditions()
    } else {
      finishGame()
    }
  }

  function checkVictoryConditions() {
    const winKeys = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [3, 5, 7],
      [1, 5, 9]
    ]
    const xCheckedCells = cellsArray.map(cell => {
      if (cell.isChecked && cell.sign.startsWith('x')) return cell.key
    }).filter(Boolean)
    const oCheckedCells = cellsArray.map(cell => {
      if (cell.isChecked && cell.sign.startsWith('o')) return cell.key
    }).filter(Boolean)

    const xWins = winKeys.some(key => {
      return key.every(num => xCheckedCells.includes(num))
    })
    const oWins = winKeys.some(key => {
      return key.every(num => oCheckedCells.includes(num))
    })

    if (xCheckedCells.length > 2 && xWins) {
      return console.log('x wins')
    } else if (oCheckedCells.length > 2 && oWins) {
      return console.log('o wins')
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
