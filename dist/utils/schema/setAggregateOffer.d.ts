import type { AggregateOffer } from '../../types';
export declare function setAggregateOffer(aggregateOffer?: AggregateOffer): {
    '@type': string;
    priceCurrency: string;
    highPrice: string | undefined;
    lowPrice: string;
    offerCount: string | undefined;
    offers: {
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
} | undefined;
