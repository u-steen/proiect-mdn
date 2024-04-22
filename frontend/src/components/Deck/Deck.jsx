const Deck = ({ drawCallback }) => {
  const drawCard = () => {
    console.log("Drew a card");
    drawCallback({ id: gigel_card.png, name: "gica", health: 2, power: 1 });
    // functie random
    // id va fi un index care creste in functie de cate ori am apasat pe buton
    // numele va fi luat dintr un array de nume
    // health si power vor fi random intre 1 si 5
  };
  return (
    <div className="h-[250px] w-[180px] bg-red-200 rounded-lg hover:bg-red-400 " onClick={drawCard}>
      Click to draw card
    </div>
  );
};

export default Deck;
