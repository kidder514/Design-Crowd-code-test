import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CustomInput from './CustomInput';

describe('CustomInput', () => {
    it('renders correctly with basic props', () => {
        render(<CustomInput label="Name" type="text" value="foo bar" name="fullName" />);

        const input = screen.getByTestId('Name');
        expect(input).toBeInTheDocument();
        expect(input).toHaveValue('foo bar');
    });

    it('renders different input types', () => {
        render(<CustomInput label="Email" type="email" value="foobar@example.com" name="email" />);
        expect(screen.getByTestId('Email')).toHaveAttribute('type', 'email');

        render(<CustomInput label="Phone" type="number" value="123-456-7890" name="phone" />);
        expect(screen.getByTestId('Phone')).toHaveAttribute('type', 'number');
    });

    it('calls onChange handler on value change', () => {
        const mockOnChange = jest.fn();
        render(<CustomInput label="Message" type="text" value="" name="message" onChange={mockOnChange} />);

        const input = screen.getByTestId('Message');
        fireEvent.change(input, { target: { value: 'new message' } });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    it('calls onClick handler on click', () => {
        const mockOnClick = jest.fn();
        render(<CustomInput label="Search" type="text" value="" name="search" theme="secondary" onClick={mockOnClick} />);

        const input = screen.getByTestId('Search');
        fireEvent.click(input);

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});