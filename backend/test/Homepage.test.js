const React = require('react');
const { render, fireEvent, screen } = require('@testing-library/react');
const Homepage = require('../frontend/src/components/Pages/Homepage.jsx').default; // Obținem componenta implicită exportată

describe('Homepage Component', () => {
    test('should render Homepage component correctly', () => {
        render(<Homepage />);
        expect(screen.getByText(/ultimate heinsenberg vs goku card game!/i)).toBeInTheDocument(); // Asigură-te că textul există în componenta Homepage
    });

    test('should update volume on slider change', () => {
        render(<Homepage />);
        const volumeSlider = screen.getByRole('slider');
        fireEvent.change(volumeSlider, { target: { value: '50' } });
        expect(screen.getByText('50')).toBeInTheDocument(); // Verifică dacă volumul a fost actualizat la 50
    });
});
