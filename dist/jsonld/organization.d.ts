import type { Address, OrganizationCategory, ContactPoint } from '../types';
import { JsonLdProps } from './jsonld';
export interface OrganizationJsonLdProps extends JsonLdProps {
    type?: OrganizationCategory;
    id?: string;
    name: string;
    logo?: string;
    url: string;
    legalName?: string;
    sameAs?: string[];
    address?: Address | Address[];
    /**
     * @deprecated please use contactPoint instead. contactPoints will continue to work until next major release.
     */
    contactPoints?: ContactPoint[];
    contactPoint?: ContactPoint[];
}
declare function OrganizationJsonLd({ type, keyOverride, address, contactPoints, contactPoint, ...rest }: OrganizationJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default OrganizationJsonLd;
