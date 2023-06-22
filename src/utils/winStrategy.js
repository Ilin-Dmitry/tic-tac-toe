import winKeys from "./winKeys";

export function moveToWin(freeCells, userCells, computerCells) {
  const almostXWon = winKeys.find(winKey => {
    return winKey.filter(num => userCells.includes(num)).length === 2 && winKey.filter(num => computerCells.includes(num)).length === 0
  })
  const almostOWon = winKeys.find(winKey => {
    return winKey.filter(num => computerCells.includes(num)).length === 2 && winKey.filter(num => userCells.includes(num)).length === 0
  })

  if (userCells.length === 1 && userCells.includes(5)) {
    const possibleMoves = [1, 3, 7, 9]
    return possibleMoves[Math.floor(Math.random()* possibleMoves.length)]
  } else if (userCells.length === 1 && !userCells.includes(5)) {
    return 5
  } else if (almostXWon && almostOWon) {
    console.log('отработали обе', almostXWon, almostOWon)
      const bestKeysToChoose = almostOWon.flat(1)
      const freeCellsToMove = freeCells.filter(cell => {
        return bestKeysToChoose.includes(cell.key)
      }).map(cell => cell.key)
      const chosenFreeKey = freeCellsToMove[Math.floor(Math.random()*freeCellsToMove.length)]
      return chosenFreeKey ? chosenFreeKey : freeCells[Math.floor(Math.random()* freeCells.length)].key;

  } else if (almostXWon) {
    console.log('отработала almostXWon')
    const bestKeysToChoose = almostXWon.flat(1)
    const freeCellsToMove = freeCells.filter(cell => {
      return bestKeysToChoose.includes(cell.key)
    }).map(cell => cell.key)
    const chosenFreeKey = freeCellsToMove[Math.floor(Math.random()*freeCellsToMove.length)]

    return chosenFreeKey ? chosenFreeKey : freeCells[Math.floor(Math.random()* freeCells.length)].key;
  } else if (almostOWon) {
    console.log('отработала almostOWon')


    const bestKeysToChoose = almostOWon.flat(1)
    const freeCellsToMove = freeCells.filter(cell => {
      return bestKeysToChoose.includes(cell.key)
    }).map(cell => cell.key)
    const chosenFreeKey = freeCellsToMove[Math.floor(Math.random()*freeCellsToMove.length)]

    return chosenFreeKey ? chosenFreeKey : freeCells[Math.floor(Math.random()* freeCells.length)].key;
  } else  {
    console.log('random');

    return freeCells[Math.floor(Math.random()* freeCells.length)].key;

  }

}
