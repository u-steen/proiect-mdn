const Deck = ({ drawCallback }) => {
  const drawCard = () => {
    console.log("Drew a card");
    drawCallback({ id: 3, name: "gica", health: 2, power: 1 });
  };
  return (
    <div className="h-[250px] w-[180px] bg-red-200" onClick={drawCard}>
      Click to draw card
    </div>
  );
};

export default Deck;
