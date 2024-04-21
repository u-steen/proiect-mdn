import Board from "./components/Board/Board";
import Cards from "./components/Cards/Cards";
import Deck from "./components/Deck/Deck";

function Game() {
  return (
    <div className="h-[900px] w-[1600px] bg-blue-200 mx-auto flex justify-center pt-12 relative overflow-hidden">
      <Board />
      <div className="absolute right-10 top-40">
        <Deck />
      </div>
      <div className="absolute -bottom-40">
        <Cards />
      </div>
    </div>
  );
}

export default Game;
