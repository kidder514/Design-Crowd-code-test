
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('App should render', () => {
        render(<App />);
        expect(screen.getByTestId('h-card-page')).toBeInTheDocument();
    });
});