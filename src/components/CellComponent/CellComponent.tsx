import { FC } from "react";
import { Cell } from "../../models/Cell";

interface CellProps {
  cell: Cell;
  isSelected: boolean;
  handleClickCell: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({
  cell,
  isSelected,
  handleClickCell,
}) => {
  const handleClickIsSelected = () => {
    handleClickCell(cell);
  };

  return (
    <div
      className={`cell ${cell.color} ${isSelected && "selected"} ${
        cell.isAvailable && cell.figure && `back`
      }`}
      onClick={handleClickIsSelected}
    >
      {cell.isAvailable && !cell.figure && <div className={`available`} />}
      {cell.figure?.logo && <img src={cell.figure.logo} />}
    </div>
  );
};

export default CellComponent;
