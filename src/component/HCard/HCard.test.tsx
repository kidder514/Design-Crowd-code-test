import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HCard from './HCard';
import { GROUP_TYPE } from '../../types';

const data = {
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

    address: {
        label: "ADDRESS",
        type: GROUP_TYPE.ACTION,
        fields: {
            houseNameNumber: {
                label: "HOUSE NAME OR #",
                type: "text",
                value: "2"
            },
            street: {
                label: "STREET",
                type: "text",
                value: "Hill St"
            },
            suburb: {
                label: "SUBURB",
                type: "text",
                value: "Surry Hills"
            },
            state: {
                label: "STATE",
                type: "text",
                value: "NSW"
            },
            postcode: {
                label: "POSTCODE",
                type: "number",
                value: "2010"
            },
            country: {
                label: "COUNTRY",
                type: "text",
                value: "Australia"
            }
        }
    },
};

describe('HCard', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('renders nothing when data is undefined', () => {
        render(<HCard data={undefined} />);
        expect(screen.queryByTestId('h-card-view')).toBeNull();
    });

    it('renders all fields correctly when data is provided', () => {
        render(<HCard data={data} />);
        screen.debug();
        expect(screen.getByText('Sam Smith')).toBeInTheDocument();
        expect(screen.getByText('EMAIL')).toBeInTheDocument();
        expect(screen.getByText('sam.smith@designcrowd.com')).toBeInTheDocument();
        expect(screen.getByText('PHONE')).toBeInTheDocument();
        expect(screen.getByText('02 1234 5678')).toBeInTheDocument();
        expect(screen.getByText('ADDRESS')).toBeInTheDocument();
        expect(screen.getByText('2 Hill St')).toBeInTheDocument();
        expect(screen.getByText('Surry Hills NSW')).toBeInTheDocument();
        expect(screen.getByText('POSTCODE')).toBeInTheDocument();
        expect(screen.getByText('2010')).toBeInTheDocument();
        expect(screen.getByText('COUNTRY')).toBeInTheDocument();
        expect(screen.getByText('Australia')).toBeInTheDocument();
    });
});