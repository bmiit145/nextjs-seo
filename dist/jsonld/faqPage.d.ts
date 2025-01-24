import type { Question } from '../types';
import { JsonLdProps } from './jsonld';
export interface FAQPageJsonLdProps extends JsonLdProps {
    mainEntity: Question[];
}
declare function FAQPageJsonLd({ type, keyOverride, mainEntity, ...rest }: FAQPageJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default FAQPageJsonLd;
