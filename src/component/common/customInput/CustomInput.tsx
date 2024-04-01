import { ChangeEvent, FC, HTMLInputTypeAttribute, memo, MouseEvent } from 'react'
import CustomInputFile from '../CustomInputFile/CustomInputFile'

import './CustomInput.scss'

export interface CustomInputProps {
    label?: string
    type: HTMLInputTypeAttribute
    value?: string | number
    name?: string
    className?: string
    theme?: 'primary' | 'secondary'
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onClick?: (e: MouseEvent<HTMLInputElement>) => void
}

// validator to be added

const CustomInput: FC<CustomInputProps> = (props: CustomInputProps) => {
    const { type, label, value, name, className, theme = 'primary', onChange, onClick } = props;

    if (type === 'file') {
        // move input[type=file] to another component to reduce the component complexity
        return <CustomInputFile {...props} />
    }

    return (
        <div className={`custom-input-wrapper ${className} ${theme}`}>
            {label && <label htmlFor={label}>{label}</label>}
            <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                data-testid={label?.replace(' ', '-') || ''}
                onClick={onClick}
            />
        </div>
    )
}

export default CustomInput