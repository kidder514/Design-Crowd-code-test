import { HTMLInputTypeAttribute } from "react";

export type Field = {
    label: string,
    type: HTMLInputTypeAttribute,
    value: string | number
}

export type Fields = {
    [key: string]: Field
}

export type Section = {
    label: string,
    type: 'section',
    fields: Fields
}

export interface HCardDataResponse {
    [key: string]: Section
}