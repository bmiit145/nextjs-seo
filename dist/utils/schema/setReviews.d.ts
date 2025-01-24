import type { Review } from '../../types';
export declare function setReviews(reviews?: Review | Review[]): {
    publisher?: {
        '@type': string;
        name: string;
        logo: {
            '@type': string;
            url: string;
        } | undefined;
    } | undefined;
    reviewRating: {
        '@type': string;
        bestRating?: string;
        ratingValue: string;
        worstRating?: string;
    } | undefined;
    author?: {
        '@type': string;
        name: string;
        url?: undefined;
    } | {
        '@type': "Person" | "Organization";
        name: string;
        url: string | undefined;
    } | ({
        '@type': string;
        name: string;
        url?: undefined;
    } | {
        '@type': "Person" | "Organization";
        name: string;
        url: string | undefined;
    })[] | undefined;
    '@type': string;
    datePublished?: string;
    reviewBody?: string;
    name?: string;
} | {
    publisher?: {
        '@type': string;
        name: string;
        logo: {
            '@type': string;
            url: string;
        } | undefined;
    } | undefined;
    reviewRating: {
        '@type': string;
        bestRating?: string;
        ratingValue: string;
        worstRating?: string;
    } | undefined;
    author?: {
        '@type': string;
        name: string;
        url?: undefined;
    } | {
        '@type': "Person" | "Organization";
        name: string;
        url: string | undefined;
    } | ({
        '@type': string;
        name: string;
        url?: undefined;
    } | {
        '@type': "Person" | "Organization";
        name: string;
        url: string | undefined;
    })[] | undefined;
    '@type': string;
    datePublished?: string;
    reviewBody?: string;
    name?: string;
}[] | undefined;
