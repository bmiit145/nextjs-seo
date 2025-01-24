import type { ItemListElements } from '../types';
import { JsonLdProps } from './jsonld';
export interface BreadCrumbJsonLdProps extends JsonLdProps {
    itemListElements: ItemListElements[];
}
declare function BreadCrumbJsonLd({ type, keyOverride, itemListElements, ...rest }: BreadCrumbJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default BreadCrumbJsonLd;
