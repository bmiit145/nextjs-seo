import { JsonLdProps } from './jsonld';
import type { ItemListElements } from '../types';
export interface ProfilePageJsonLdProps extends JsonLdProps {
    breadcrumb: string | ItemListElements[];
    lastReviewed?: string;
}
declare function ProfilePageJsonLd({ type, keyOverride, breadcrumb, ...rest }: ProfilePageJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default ProfilePageJsonLd;
