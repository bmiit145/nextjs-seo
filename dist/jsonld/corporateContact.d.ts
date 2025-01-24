import { JsonLdProps } from './jsonld';
import type { ContactPoint } from '../types';
export interface CorporateContactJsonLdProps extends JsonLdProps {
    url: string;
    contactPoint: ContactPoint[];
    logo?: string;
}
declare function CorporateContactJsonLd({ type, keyOverride, contactPoint, ...rest }: CorporateContactJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default CorporateContactJsonLd;
