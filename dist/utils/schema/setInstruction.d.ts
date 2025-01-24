import { Instruction } from '../../types';
export declare function setInstruction(instruction: Instruction): {
    '@type': string;
    name?: string;
    text: string;
    url?: string;
    image?: string;
} | undefined;
