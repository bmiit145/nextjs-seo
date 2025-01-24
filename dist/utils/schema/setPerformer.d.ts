import { Performer } from '../../types';
export declare function setPerformer(performer?: Performer): {
    '@type': "Person" | "PerformingGroup";
    name: string;
} | undefined;
