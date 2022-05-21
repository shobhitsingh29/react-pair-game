import shuffle from './shuffleDeckUtils';

const generateDeck = (m, n) => {
  const symbols = ['Cat', 'Dog'];
  const deck = [];
  for (let i = 0; i < m * n; i++) {
    deck.push({
      isFlipped: false,
      symbol: symbols[i % 2],
    });
  }
  return shuffle(deck);
};

export default generateDeck;
