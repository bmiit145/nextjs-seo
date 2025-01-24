import type { ReviewedBy } from '../types';
import { JsonLdProps } from './jsonld';
export interface WebPageJsonLdProps extends JsonLdProps {
    keyOverride?: string;
    id: string;
    description?: string;
    lastReviewed?: string;
    reviewedBy?: ReviewedBy;
}
declare function WebPageJsonLd({ keyOverride, reviewedBy, ...rest }: WebPageJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default WebPageJsonLd;
