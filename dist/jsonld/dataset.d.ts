import { JsonLdProps } from './jsonld';
export interface DatasetJsonLdProps extends JsonLdProps {
    description: string;
    name: string;
    license?: string;
}
declare function DatasetJsonLd({ type, keyOverride, ...rest }: DatasetJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default DatasetJsonLd;
