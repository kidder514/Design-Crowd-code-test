import config from './mock.json';
import { HCardDataResponse } from '../types';

// mimic api call
const promiseWrapper = async (data: any): Promise<any> => {
    return new Promise((resolve => setTimeout(() => resolve(data), 200)))
}

export const getHCardData = async (): Promise<HCardDataResponse> => {
    return promiseWrapper(config);
}
