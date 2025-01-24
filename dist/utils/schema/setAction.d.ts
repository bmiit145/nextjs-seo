import { Action } from '../../types';
export declare function setAction(action?: Action): {
    '@type': string;
    name: string;
    target: string;
} | undefined;
