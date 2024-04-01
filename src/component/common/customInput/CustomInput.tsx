import { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react'

import './CustomInput.scss'

interface CustomInputProps {
    label: string
    type: HTMLInputTypeAttribute
    value: string | number
    name: string
    className?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

// validator to be added

const CustomInput: FC<CustomInputProps> = ({
    type,
    label,
    value,
    name,
    className,
    onChange,
}) => {
    return (
        <div className={`custom-input-wrapper ${className}`}>
            <label htmlFor={label}>{label}</label>
            <input
                type={type}
                id={label}
                value={value}
                name={name}
                onChange={onChange}
            />
        </div>
    )
}

export default CustomInput