import { OpeningHoursSpecification } from '../../types';
export declare function setOpeningHours(openingHours?: OpeningHoursSpecification): {
    '@type': string;
    opens: string;
    closes: string;
    dayOfWeek: string | string[];
    validFrom?: string;
    validThrough?: string;
} | undefined;
