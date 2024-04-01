import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import HCardForm from './HCardForm';
import { GROUP_TYPE } from '../../types';

const personalDetails = {
    personalDetails: {
        label: "PERSONAL DETAILS",
        type: GROUP_TYPE.INPUT,
        fields: {
            givenName: {
                label: "GIVEN NAME",
                type: "text",
                value: "Sam"
            },
            surname: {
                label: "SURNAME",
                type: "text",
                value: "Smith"
            },
            email: {
                label: "EMAIL",
                type: "email",
                value: "sam.smith@designcrowd.com"
            },
            phone: {
                label: "PHONE",
                type: "text",
                value: "02 1234 5678"
            }
        }
    },
};

const action = {
    action: {
        label: "Action",
        type: GROUP_TYPE.ACTION,
        fields: {
            uploadAvatar: {
                label: "Upload Avatar",
                type: "file",
                value: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
            },
            createHCArd: {
                label: "Create hCard",
                type: "button",
                value: ""
            }
        }
    }
}

describe('HCardForm', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders nothing when data is undefined', () => {
        render(<HCardForm data={undefined} setHCardData={jest.fn()} />);
        expect(screen.queryByText('HCard Builder')).toBeNull();
    });

    it('renders input groups correctly', () => {
        render(<HCardForm data={personalDetails} setHCardData={jest.fn()} />);
        expect(screen.getByText('HCard Builder')).toBeInTheDocument();
        expect(screen.getByText('PERSONAL DETAILS')).toBeInTheDocument();
        expect(screen.getByText('GIVEN NAME')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Sam')).toBeInTheDocument();
        expect(screen.getByText('SURNAME')).toBeInTheDocument();
        expect(screen.getByDisplayValue('Smith')).toBeInTheDocument();
        expect(screen.getByText('EMAIL')).toBeInTheDocument();
        expect(screen.getByDisplayValue('sam.smith@designcrowd.com')).toBeInTheDocument();
        expect(screen.getByText('PHONE')).toBeInTheDocument();
        expect(screen.getByDisplayValue('02 1234 5678')).toBeInTheDocument();
    });

    it('should call setHCardData on input change', async () => {
        const mockOnChange = jest.fn();
        render(<HCardForm data={personalDetails} setHCardData={mockOnChange} />);
        expect(screen.getByText('HCard Builder')).toBeInTheDocument();
        expect(screen.getByText('PERSONAL DETAILS')).toBeInTheDocument();
        const givenNameInput = screen.getByTestId('GIVEN-NAME');
        fireEvent.change(givenNameInput, { target: { value: 'new given name' } });
        await waitFor(() => expect(mockOnChange).toHaveBeenCalled());
    });

    it('renders action groups correctly', async () => {
        render(<HCardForm data={action} setHCardData={jest.fn()} />);
        expect(screen.getByText('Upload Avatar')).toBeInTheDocument();
        expect(screen.getByText('Create hCard')).toBeInTheDocument();
    });
});