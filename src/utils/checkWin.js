import winKeys from "./winKeys";

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
