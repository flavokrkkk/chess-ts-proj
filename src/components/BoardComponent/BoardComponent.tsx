import React, { FC, useState } from "react";
import { Board } from "../../models/Board";
import CellComponent from "../CellComponent/CellComponent.tsx";
import { Cell } from "../../models/Cell.ts";

interface BoardProps {
  board: Board;
  setBoard?: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const handleClickCell = (cell: Cell) => cell.figure && setSelectedCell(cell);

  return (
    <div className="board">
      {board.cells.map((row, index) => (
        <React.Fragment key={index}>
          {row.map((cell) => (
            <CellComponent
              handleClickCell={handleClickCell}
              cell={cell}
              key={cell.id}
              isSelected={
                cell.x === selectedCell?.x && cell.y === selectedCell?.y
              }
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BoardComponent;
