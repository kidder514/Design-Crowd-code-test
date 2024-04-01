import { ChangeEvent } from "react";
import cloneDeep from "lodash/cloneDeep";
import set from "lodash/set";
import CustomInput from "../common/CustomInput/CustomInput";
import { Group, GROUP_TYPE, HCardDataResponse } from "../../types";

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

    const renderInputGroup = (group: Group, key: string, index: number) => {
        return (
            <section className='h-card-form-input-group-wrapper' key={`input-group-${index}-${key}`}>
                <h3 className='h-card-form-input-group-header'>
                    {group.label}
                </h3>
                <div className="h-card-form-input-group">
                    {Object.keys(group.fields).map((fieldKey, fieldIndex) => {
                        const field = group.fields[fieldKey];
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
    }

    const renderButtonGroup = (group: Group, key: string, index: number) => {
        return (
            <section className='h-card-form-button-group-wrapper' key={`button-group-${index}-${key}`}>
                <div className="h-card-form-button-group">
                    {Object.keys(group.fields).map((fieldKey, fieldIndex) => {
                        const field = group.fields[fieldKey];
                        if (field.type === 'file') {
                            return <CustomInput
                                className='h-card-form-button'
                                key={`field-${fieldIndex}-${fieldKey}`}
                                label={field.label}
                                type={field.type}
                                theme='secondary'
                                name={field.label.replace(' ', '-')}
                                onChange={(e) => onFieldChange(e, `${key}.fields.${fieldKey}.value`)}
                            />
                        } else if (field.type === 'button') {
                            return <CustomInput
                                className='h-card-form-button'
                                key={`field-${fieldIndex}-${fieldKey}`}
                                theme='primary'
                                type={field.type}
                                value={field.label}
                                onClick={() => { console.log('save state to DB', data) }}
                            />
                        } else {
                            return <></>
                        }
                    })}
                </div>
            </section>
        );
    }


    // dynamically render from the API data
    return (
        <div className="h-card-form">
            <h1 className='h-card-form-title'>HCard Builder</h1>
            {
                Object.keys(data).map((key, index) => {
                    const group = data[key];

                    // more group type can be handled here
                    if (group.type === GROUP_TYPE.INPUT) {
                        return renderInputGroup(group, key, index);
                    } else if (group.type === GROUP_TYPE.ACTION) {
                        return renderButtonGroup(group, key, index);
                    } else {
                        return <></>
                    }
                })
            }
        </div >
    )
}

export default HCardForm
