import { useEffect, useState } from "react";
import BoardComponent from "./components/BoardComponent/BoardComponent";
import "./styles/styles.css";
import { Board } from "./models/Board";
import { Player } from "./models/Player";
import { Colors } from "./models/Colors";
import LostFigures from "./components/LostFigures/LostFigures";
import Timer from "./components/Timer/Timer";

function App() {
  const [board, setBoard] = useState(new Board());

  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));

  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  };

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
  }, []);

  const swapPlayer = () => {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    );
  };

  return (
    <div className="app">
      <Timer currentPlayer={currentPlayer} restart={restart} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer={swapPlayer}
      />
      <div>
        <LostFigures title="Черные фигуры" figures={board.lostBlackFigures} />
        <LostFigures title="Белые фигуры" figures={board.lostWhiteFigures} />
      </div>
    </div>
  );
}

export default App;
