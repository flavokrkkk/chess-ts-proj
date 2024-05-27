import React, { FC, useEffect, useState } from "react";
import { Board } from "../../models/Board";
import CellComponent from "../CellComponent/CellComponent.tsx";
import { Cell } from "../../models/Cell.ts";
import { Player } from "../../models/Player.ts";

interface BoardProps {
  board: Board;
  setBoard?: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: FC<BoardProps> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  const handleClickCell = (cell: Cell) => {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
    } else {
      if (cell.figure?.color === currentPlayer?.color) setSelectedCell(cell);
    }
  };

  const hightLightCells = () => {
    board.isHightLightCells(selectedCell);
    updateBoard();
  };

  //Функция для обновления состояния

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard!(newBoard);
  };

  useEffect(() => {
    hightLightCells();
  }, [selectedCell]);

  return (
    <div>
      <h3>Current Player: {currentPlayer?.color}</h3>
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
    </div>
  );
};

export default BoardComponent;
