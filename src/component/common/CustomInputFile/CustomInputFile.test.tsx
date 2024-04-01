import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomInputFile from './CustomInputFile';

describe('CustomInputFile', () => {
    it('renders correctly and triggers onClick', () => {
        const mockOnChange = jest.fn();
        render(<CustomInputFile type="file" label="Upload Image" theme="secondary" onChange={mockOnChange} />);

        const button = screen.getByText('Upload Image');
        expect(button).toBeInTheDocument();

        fireEvent.click(button);
        expect(mockOnChange).not.toHaveBeenCalled(); // No file selection yet
    });
});