const Deck = () => {
  const drawCard = () => {
    console.log("Drew a card");
    // TODO: API Call to draw a card
  };
  return (
    <div className="h-[250px] w-[180px] bg-red-200" onClick={drawCard}>
      Click to draw card
    </div>
  );
};

export default Deck;
