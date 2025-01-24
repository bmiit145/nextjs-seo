import { Location } from '../../types';
export declare function setLocation(location?: Location): string | {
    '@type': string;
    name?: string;
    sameAs?: string;
    url: string;
} | {
    address: string | {
        streetAddress: string;
        addressLocality: string;
        addressRegion?: string;
        postalCode: string;
        addressCountry: string;
        '@type': string;
    } | (string | {
        streetAddress: string;
        addressLocality: string;
        addressRegion?: string;
        postalCode: string;
        addressCountry: string;
        '@type': string;
    })[] | undefined;
    '@type': string;
    name: string;
    sameAs?: string;
} | undefined;
