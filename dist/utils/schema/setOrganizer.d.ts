import { Organizer } from '../../types';
export declare function setOrganizer(organizer?: Organizer): {
    '@type': "Person" | "Organization";
    name: string;
    url: string;
} | undefined;
