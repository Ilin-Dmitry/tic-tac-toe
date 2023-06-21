export function moveToWin(freeCells, userCells, computerCells) {
  if (userCells.length === 1 && userCells.includes[5]) {
    const possibleMoves = [2, 4, 6, 8]
    return possibleMoves[Math.floor(Math.random()* possibleMoves.length)]
  } else {
    console.log('логика еще не прописана');
  }

}
