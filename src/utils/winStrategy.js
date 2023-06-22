import winKeys from "./winKeys";

export function moveToWin(freeCells, userCells, computerCells) {
  console.log('freeCells', freeCells)
  const almostXWon = winKeys.filter(winKey => {
    return winKey.filter(num => userCells.includes(num)).length === 2
  })
  const almostOWon = winKeys.find(winKey => {
    return winKey.filter(num => computerCells.includes(num)).length === 2
  })

  if (userCells.length === 1 && userCells.includes(5)) {
    const possibleMoves = [1, 3, 7, 9]
    console.log(possibleMoves[Math.floor(Math.random()* possibleMoves.length)])
    return possibleMoves[Math.floor(Math.random()* possibleMoves.length)]
  } else if (userCells.length === 1 && !userCells.includes(5)) {
    return 5
  // } else if () {

  } else if (almostXWon) {
    // console.log('almostXWon', almostXWon)
    // console.log('отработала almostXWon')
    // const oMove = almostXWon.filter(num => !userCells.includes(num) && freeCells.includes(num))
    // const oMove = almostXWon[0].filter(num => !userCells.includes(num))
    const bestKeysToChoose = almostXWon.flat(1)
    const freeCellsToMove = freeCells.filter(cell => {
      return bestKeysToChoose.includes(cell.key)
    }).map(cell => cell.key)
    const chosenFreeKey = freeCellsToMove[Math.floor(Math.random()*freeCellsToMove.length)]
    // console.log('freeCellsToChoose', bestKeysToChoose, freeCellsToMove)
    // console.log('choosedFreeKey =', choosedFreeKey)
    // console.log('result', choosedFreeKey ? choosedFreeKey : freeCells[Math.floor(Math.random()* freeCells.length)])

    return chosenFreeKey ? chosenFreeKey : freeCells[Math.floor(Math.random()* freeCells.length)].key;
  } else if (almostOWon) {
    console.log('отработала almostOWon')
    return almostOWon.filter(num => !computerCells.includes(num))
  } else  {
    console.log('логика еще не прописана');
  }

}
