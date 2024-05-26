//Создание класса для ячейки

import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figures";

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figure | null;
  board: Board;
  isAvailable: boolean;
  id: number;

  constructor(
    board: Board,
    x: number,
    y: number,
    color: Colors,
    figure: Figure | null
  ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.isAvailable = false;
    this.id = Math.random();
  }
}
