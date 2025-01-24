import type { Producer } from '../../types';
export declare function setProducer(producer?: Producer): {
    '@type': string;
    sameAs: string | undefined;
    name: string;
} | undefined;
