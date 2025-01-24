import { JsonLdProps } from './jsonld';
import type { CreativeWork } from '../types';
export interface CollectionPageJsonLdProps extends JsonLdProps {
    name: string;
    hasPart: CreativeWork[];
}
declare function CollectionPageJsonLd({ type, keyOverride, hasPart, ...rest }: CollectionPageJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default CollectionPageJsonLd;
