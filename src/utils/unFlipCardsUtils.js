const unflipCards = (card1Index, card2Index, deck) => {
  const card1 = { ...deck[card1Index] };
  const card2 = { ...deck[card2Index] };
  card1.isFlipped = false;
  card2.isFlipped = false;

  const newDeck = deck.map((card, index) => {
    if (card1Index === index) {
      return card1;
    }
    if (card2Index === index) {
      return card2;
    }
    return card;
  });
  return newDeck;
};

export default unflipCards;
