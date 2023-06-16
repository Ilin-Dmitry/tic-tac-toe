import React from 'react';
import Cell from "./Cell";
import {cellsArray} from "../utils/cellsArray";

const Game = () => {

  function clickCell(num) {
    const checkedCell = cellsArray.find(number => number.key === num);
    checkedCell.isChecked = true;
  }

  return (
      <div className="game">
        {cellsArray.map(cell => {
            return <Cell key={cell.key} number={cell.key} isChecked={cell.isChecked} onClick={clickCell}/>
          })}
      </div>
  );
};

export default Game;
