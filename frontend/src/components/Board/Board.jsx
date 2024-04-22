const Board = () => {
  return (
    <div className="h-[700px] w-[1000px] bg-green-600/70 flex flex-col justify-between rounded-lg">
      <div className="bg-gray-800/40 h-[300px] w-fill">Zona carti player 1</div>
      <div className="h-2 bg-black" />
      <div className="bg-gray-800/40 h-[300px] w-fill">Zona carti player 2</div>
    </div>
  );
};

export default Board;
