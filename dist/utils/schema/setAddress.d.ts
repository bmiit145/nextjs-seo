import { Address } from '../../types';
export declare function setAddress(address?: Address | Address[]): string | {
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
