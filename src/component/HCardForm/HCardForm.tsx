import { ChangeEvent } from "react";
import cloneDeep from "lodash/cloneDeep";
import set from "lodash/set";
import CustomInput from "../common/customInput/CustomInput";
import { HCardDataResponse } from "../../types";

import './HCardForm.scss'

interface HCardFormProps {
    data?: HCardDataResponse;
    setHCardData: React.Dispatch<React.SetStateAction<HCardDataResponse | undefined>>
}

const HCardForm = ({ data, setHCardData }: HCardFormProps) => {
    if (!data) return <></>;

    const onFieldChange = (e: ChangeEvent<HTMLInputElement>, path: string) => {
        const newData = cloneDeep(data);
        set(newData, path, e.target.value);
        setHCardData(newData); // update local state
    }

    // dynamically render from the API data
    return (
        <div className="h-card-form">
            <h1 className='h-card-form-title'>HCard Builder</h1>
            {
                Object.keys(data).map((key, index) => {
                    const section = data[key];
                    return (
                        <section className='h-card-form-section' key={`section-${index}-${key}`}>
                            <h3 className='h-card-form-section-header'>
                                {section.label}
                            </h3>
                            <div className="h-card-form-input-group">
                                {Object.keys(section.fields).map((fieldKey, fieldIndex) => {
                                    const field = section.fields[fieldKey];
                                    return <CustomInput
                                        className='h-card-form-input'
                                        key={`field-${fieldIndex}-${fieldKey}`}
                                        label={field.label}
                                        type={field.type}
                                        value={field.value}
                                        name={field.label.replace(' ', '-')}
                                        onChange={(e) => onFieldChange(e, `${key}.fields.${fieldKey}.value`)}
                                    />
                                })}
                            </div>
                        </section>
                    )
                })
            }
        </div >
    )
}

export default HCardForm
