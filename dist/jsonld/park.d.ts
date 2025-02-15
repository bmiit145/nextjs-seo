import { JsonLdProps } from './jsonld';
import { Address, Geo, OpeningHoursSpecification } from '../types';
export interface ParkJsonLdProps extends JsonLdProps {
    address: Address | Address[];
    description: string;
    geo?: Geo;
    images?: string[];
    isAccessibleForFree?: boolean;
    name: string;
    openingHours?: OpeningHoursSpecification | OpeningHoursSpecification[];
    telephone?: string;
    type?: string;
    url?: string;
}
declare function ParkJsonLd({ address, geo, images, keyOverride, openingHours, type, ...rest }: ParkJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default ParkJsonLd;
