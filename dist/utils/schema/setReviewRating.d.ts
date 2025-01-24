import type { ReviewRating } from '../../types';
export declare function setReviewRating(rating?: ReviewRating): {
    '@type': string;
    bestRating?: string;
    ratingValue: string;
    worstRating?: string;
} | undefined;
