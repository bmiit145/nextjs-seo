import { ContactPoint } from '../../types';
export declare function setContactPoint(contactPoint: ContactPoint): {
    '@type': string;
    contactType: string;
    telephone: string;
    email?: string;
    areaServed?: string | string[];
    availableLanguage?: string | string[];
    contactOption?: string | string[];
} | undefined;
