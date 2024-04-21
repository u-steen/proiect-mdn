import Board from "./components/Board/Board";
import Deck from "./components/Deck/Deck";

function Game() {
  return (
    <div className="h-[900px] w-[1600px] bg-blue-200 mx-auto flex justify-center pt-12 relative">
      <Board />
      <div className="absolute right-10 top-40">
        <Deck className />
      </div>
    </div>
  );
}

export default Game;
