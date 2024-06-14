const React = require('react');
const { render, screen } = require('@testing-library/react');
const Game = require('../src/Game').default; // Obținem componenta implicită exportată

describe('Game Component', () => {
  test('should distribute correct cards to Walter', () => {
    render(<Game />);
    const walterCardNames = [
      "Walter White",
      "Goku",
      "Raiden",
      "Gordon",
      "The Courier"
    ];

    walterCardNames.forEach(name => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  test('should distribute correct cards to Jesse', () => {
    render(<Game />);
    const jesseCardNames = [
      "George",
      "Snake",
      "Peter",
      "Jesse",
      "Iohannis"
    ];

    jesseCardNames.forEach(name => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  test('should start with Walter as the current player', () => {
    render(<Game />);
    expect(screen.getByText(/Current Player:/i)).toHaveTextContent('Walter');
  });

  test('should have mana bar visible for both players', () => {
    render(<Game />);
    expect(screen.getAllByText(/Mana/)).toHaveLength(2);
  });
});
