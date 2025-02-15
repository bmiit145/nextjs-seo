import type { AggregateRating } from '../types';
import { JsonLdProps } from './jsonld';
export interface BrandJsonLdProps extends JsonLdProps {
    id: string;
    slogan?: string;
    logo?: string;
    aggregateRating?: AggregateRating;
}
declare function BrandJsonLd({ type, id, keyOverride, aggregateRating, ...rest }: BrandJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default BrandJsonLd;
