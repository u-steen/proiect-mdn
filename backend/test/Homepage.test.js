import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Homepage from '../src/components/Pages/Homepage'; // Asigură-te că calea este corectă

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
