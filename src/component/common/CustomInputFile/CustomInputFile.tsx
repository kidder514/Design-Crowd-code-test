import { ChangeEvent, FC, memo, useRef } from 'react'
import { CustomInputProps } from '../CustomInput/CustomInput';

import './CustomInputFile.scss'

// validator to be added

const CustomInputFile: FC<CustomInputProps> = memo(({
    label,
    className,
    theme = 'primary',
    onChange,
    ...props
}) => {
    const inputFileRef = useRef<HTMLInputElement>(null);

    const onClick = () => {
        if (!inputFileRef?.current) return;
        inputFileRef.current.click();
    };

    const onChangeLocal = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && onChange) {
            console.log(e.target.files[0])
            console.log(URL.createObjectURL(e.target.files[0]))
            onChange({ target: { value: URL.createObjectURL(e.target.files[0]) } } as ChangeEvent<HTMLInputElement>);
        }
    };

    return (
        <div className={`custom-input-file-wrapper ${className} ${theme}`}>
            <button className="custom-input-file-uploader" onClick={onClick}>
                {label}
            </button>
            <input
                type='file'
                ref={inputFileRef}
                onChange={onChangeLocal}
                accept="image/png, image/gif, image/jpeg"
            />
        </div>
    )
}, (oldProps: CustomInputProps, newProps: CustomInputProps) => {
    return oldProps.label === newProps.label &&
        oldProps.className === newProps.className &&
        oldProps.theme === newProps.theme
})

export default CustomInputFile