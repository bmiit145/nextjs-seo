import type { ContactPoint } from '../../types';
export declare function setContactPoints(contactPoint?: ContactPoint[]): {
    contactType: string;
    telephone: string;
    email?: string;
    areaServed?: string | string[];
    availableLanguage?: string | string[];
    contactOption?: string | string[];
    '@type': string;
}[] | undefined;
