import React from 'react';
import { render, screen } from '@testing-library/react';
import Game from '../Game';

// Mock the components that are imported by Game component
jest.mock('../components/Board/Board', () => () => <div data-testid="board"></div>);
jest.mock('../components/Cards/Cards', () => ({ cardsArr }) => (
  <div data-testid="cards">
    {cardsArr.map(card => (
      <div key={card.id} data-testid={`card-${card.id}`}>
        {card.name}
      </div>
    ))}
  </div>
));
jest.mock('../components/Deck/Deck', () => ({ drawCallback, disabled }) => (
  <button data-testid="deck" onClick={drawCallback} disabled={disabled}>Draw</button>
));
jest.mock('../components/EndTurnButton/EndTurnButton', () => ({ endTurnCallback }) => (
  <button data-testid="end-turn" onClick={endTurnCallback}>End Turn</button>
));
jest.mock('../components/Healthbar/Healthbar', () => ({ health }) => (
  <div data-testid="healthbar">Health: {health}</div>
));
jest.mock('../components/ManaBar/ManaBar', () => ({ mana }) => (
  <div data-testid="manabar">Mana: {mana}</div>
));
jest.mock('react-router-dom', () => ({
  Link: ({ to, children }) => <a href={to}>{children}</a>
}));

test('players have initial cards, mana, and health set correctly', () => {
  render(<Game />);

  // Check if Walter has 5 cards
  const walterCards = screen.getAllByTestId(/^card-/).slice(0, 5);
  expect(walterCards).toHaveLength(5);
  
  // Check if Jesse has 5 cards
  const jesseCards = screen.getAllByTestId(/^card-/).slice(5, 10);
  expect(jesseCards).toHaveLength(5);
  
  // Check if Walter's mana is 20
  const walterManaBar = screen.getAllByTestId('manabar')[0];
  expect(walterManaBar).toHaveTextContent('Mana: 20');
  
  // Check if Jesse's mana is 20
  const jesseManaBar = screen.getAllByTestId('manabar')[1];
  expect(jesseManaBar).toHaveTextContent('Mana: 20');
  
  // Check if Walter's health is 20
  const walterHealthBar = screen.getAllByTestId('healthbar')[0];
  expect(walterHealthBar).toHaveTextContent('Health: 20');
  
  // Check if Jesse's health is 20
  const jesseHealthBar = screen.getAllByTestId('healthbar')[1];
  expect(jesseHealthBar).toHaveTextContent('Health: 20');
});
