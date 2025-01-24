import type { BroadcastEvent } from '../../types';
export declare function setBroadcastEvent(publication?: BroadcastEvent | BroadcastEvent[]): {
    '@type': string;
    name?: string;
    isLiveBroadcast?: boolean | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
} | {
    '@type': string;
    name?: string;
    isLiveBroadcast?: boolean | undefined;
    startDate?: string | undefined;
    endDate?: string | undefined;
}[] | undefined;
