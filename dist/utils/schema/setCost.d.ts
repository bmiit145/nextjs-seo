import { PriceSpecification } from '../../types';
export declare function setCost(cost?: PriceSpecification): {
    '@type': string;
    type: string;
    priceCurrency: string;
    price: string;
} | undefined;
