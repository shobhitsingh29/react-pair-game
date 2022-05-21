import React, { useState } from 'react';
import './App.css';

import MemoryCard from './components/MemoryCard';
import generateDeck from './utils/generateDeckUtils';
import unflipCards from './utils/unFlipCardsUtils';
import { m, n, flipLength } from './constants';

const App = () => {
  const [deck, setDeck] = useState(generateDeck(m, n));
  const [pickedCards, setPickedCards] = useState([]);

  const pickCard = (cardIndex) => () => {
    if (deck[cardIndex].isFlipped) {
      return;
    }
    const cardToFlip = { ...deck[cardIndex] };
    cardToFlip.isFlipped = true;

    let newPickedCards = pickedCards.concat(cardIndex);
    const newDeck = deck.map((card, index) => {
      if (cardIndex === index) {
        return cardToFlip;
      }
      return card;
    });

    if (newPickedCards.length === flipLength) {
      const [card1Index, card2Index] = newPickedCards;
      if (newDeck[card1Index].symbol !== newDeck[card2Index].symbol) {
        setTimeout(() => {
          const newDk = unflipCards(card1Index, card2Index, deck);
          setDeck(newDk);
        }, 300);
      }
      newPickedCards = [];
    }

    setDeck(newDeck);
    setPickedCards(newPickedCards);
  };

  const cardsJSX = deck.map((card, index) => {
    return (
      <MemoryCard
        key={index}
        symbol={card.symbol}
        isFlipped={card.isFlipped}
        pickCard={pickCard(index)}
      />
    );
  });

  return <div className="App-cards">{cardsJSX}</div>;
};

export default App;
