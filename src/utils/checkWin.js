import winKeys from "./winKeys";

function checkIsWin(cellsToCheck) {
  return winKeys.find(key => {
    return key.every(num => cellsToCheck.includes(num))
  })
}

function findCheckedCells(cellsArray, sign) {
  return cellsArray.map(cell => {
    if (cell.isChecked && cell.sign.startsWith(sign)) return cell.key
  }).filter(Boolean)
}

export function checkVictoryConditions(cellsArray, setWinner, setWinCells) {
  const xWins = checkIsWin(findCheckedCells(cellsArray, 'x'))
  const oWins = checkIsWin(findCheckedCells(cellsArray, 'o'))

  if (findCheckedCells(cellsArray, 'x').length > 2 && xWins) {
    setWinner('x wins')
    setWinCells(xWins)
    return 'x wins'
  } else if (findCheckedCells(cellsArray, 'o').length > 2 && oWins) {
    setWinner('o wins')
    setWinCells(oWins)
    return 'o wins'
  }
}
