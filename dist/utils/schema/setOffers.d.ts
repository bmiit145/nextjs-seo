import { Offers } from '../../types';
export declare function setOffers(offers?: Offers | Offers[]): {
    seller: {
        '@type': string;
        name: string;
    };
    '@type': string;
    price: string;
    priceCurrency: string;
    priceValidUntil?: string;
    itemCondition?: string;
    availability?: string;
    url?: string;
    validFrom?: string;
} | {
    seller: {
        '@type': string;
        name: string;
    };
    '@type': string;
    price: string;
    priceCurrency: string;
    priceValidUntil?: string;
    itemCondition?: string;
    availability?: string;
    url?: string;
    validFrom?: string;
}[] | undefined;
