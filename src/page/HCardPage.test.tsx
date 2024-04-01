import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HCardPage from './HCardPage';

describe('HCardPage', () => {
    it('HCardPage should render', () => {
        render(<HCardPage />);
        expect(screen.getByTestId('h-card-page')).toBeInTheDocument();
    });
});