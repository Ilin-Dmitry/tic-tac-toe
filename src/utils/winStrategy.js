import winKeys from "./winKeys";

function findAlmostWon(freeCells, userCells, computerCells) {
  return winKeys.find(winKey => {
    return winKey.filter(num => userCells.includes(num)).length === 2 && winKey.filter(num => computerCells.includes(num)).length === 0
  })
}

function findCellsToMove(freeCells, whoAlmostWon) {
  const bestKeysToChoose = whoAlmostWon.flat(1)
  const freeCellsToMove = freeCells.filter(cell => {
    return bestKeysToChoose.includes(cell.key)
  }).map(cell => cell.key)
  const chosenFreeKey = freeCellsToMove[Math.floor(Math.random()*freeCellsToMove.length)]
  return chosenFreeKey ? chosenFreeKey : freeCells[Math.floor(Math.random()* freeCells.length)].key;
}

export function moveToWin(freeCells, userCells, computerCells) {
  const almostXWon = findAlmostWon(freeCells, userCells, computerCells)
  const almostOWon = findAlmostWon(freeCells, computerCells, userCells)

  if (userCells.length === 1 && userCells.includes(5)) {
    const possibleMoves = [1, 3, 7, 9]
    return possibleMoves[Math.floor(Math.random()* possibleMoves.length)]
  } else if (userCells.length === 1 && !userCells.includes(5)) {
    return 5
  } else if (almostXWon && almostOWon) {
    return findCellsToMove(freeCells, almostOWon)
  } else if (almostXWon) {
    return findCellsToMove(freeCells, almostXWon)
  } else if (almostOWon) {
    return findCellsToMove(freeCells, almostOWon)
  } else  {
    return freeCells[Math.floor(Math.random()* freeCells.length)].key;
  }
}
