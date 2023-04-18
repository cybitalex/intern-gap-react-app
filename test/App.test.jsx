import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../src/App.js';

describe('App tests', () => {
    it('should contain a heading displaying Hello there!', () => {
    render(<App />);
        const heading = screen.getByText("Hello there! How are you on this beautiful day?");
        expect(heading).toBeInTheDocument()
    });
});
