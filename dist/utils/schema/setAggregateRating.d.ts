import type { AggregateRating } from '../../types';
export declare function setAggregateRating(aggregateRating?: AggregateRating): {
    '@type': string;
    ratingCount: string | undefined;
    reviewCount: string | undefined;
    bestRating: string | undefined;
    ratingValue: string;
    worstRating: string | undefined;
} | undefined;
