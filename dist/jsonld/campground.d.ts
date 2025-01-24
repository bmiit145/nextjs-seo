import { JsonLdProps } from './jsonld';
import { Address, AggregateRating, AmenityFeature, Geo, OpeningHoursSpecification } from '../types';
export interface CampgroundJsonLdProps extends JsonLdProps {
    address: Address | Address[];
    amenityFeature?: AmenityFeature | AmenityFeature[];
    description: string;
    geo?: Geo;
    images?: string[];
    isAccessibleForFree?: boolean;
    name: string;
    openingHours?: OpeningHoursSpecification | OpeningHoursSpecification[];
    petsAllowed?: boolean;
    priceRange?: string;
    rating?: AggregateRating;
    telephone?: string;
    type?: string;
    url?: string;
}
declare function CampgroundJsonLd({ address, geo, images, keyOverride, openingHours, type, amenityFeature, rating, ...rest }: CampgroundJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default CampgroundJsonLd;
