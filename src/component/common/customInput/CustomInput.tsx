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

const CustomInput: FC<CustomInputProps> = memo((props: CustomInputProps) => {
    const { type, label, value, name, className, theme = 'primary', onChange, onClick } = props;

    if (type === 'file') {
        // move input[type=file] to another component to reduce the complexity
        return <CustomInputFile {...props} />
    }

    return (
        <div className={`custom-input-wrapper ${className} ${theme}`}>
            {label && <label htmlFor={label}>{label}</label>}
            <input
                type={type}
                id={label}
                value={value}
                name={name}
                onChange={onChange}
                onClick={onClick}
            />
        </div>
    )
}, (oldProps: CustomInputProps, newProps: CustomInputProps) => {
    return oldProps.label === newProps.label &&
        oldProps.type === newProps.type &&
        oldProps.value === newProps.value &&
        oldProps.name === newProps.name &&
        oldProps.className === newProps.className &&
        oldProps.theme === newProps.theme
})

export default CustomInput