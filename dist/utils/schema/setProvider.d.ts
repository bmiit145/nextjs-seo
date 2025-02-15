import type { Provider } from '../../types';
export declare function setProvider(provider: Provider): {
    '@type': "Person" | "Organization";
    name: string;
    sameAs: string | undefined;
} | undefined;
