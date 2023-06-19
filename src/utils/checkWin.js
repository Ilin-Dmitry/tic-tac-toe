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

function checkIsWin(cellsToCheck) {
  return winKeys.some(key => {
    return key.every(num => cellsToCheck.includes(num))
  })
}

export function checkVictoryConditions(cellsArray) {
  const xCheckedCells = cellsArray.map(cell => {
    if (cell.isChecked && cell.sign.startsWith('x')) return cell.key
  }).filter(Boolean)

  const oCheckedCells = cellsArray.map(cell => {
    if (cell.isChecked && cell.sign.startsWith('o')) return cell.key
  }).filter(Boolean)

  const xWins = checkIsWin(xCheckedCells)
  const oWins = checkIsWin(oCheckedCells)

  if (xCheckedCells.length > 2 && xWins) {
    return console.log('x wins')
  } else if (oCheckedCells.length > 2 && oWins) {
    return console.log('o wins')
  }

}
