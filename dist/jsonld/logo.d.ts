import { JsonLdProps } from './jsonld';
export interface LogoJsonLdProps extends JsonLdProps {
    logo: string;
    url: string;
}
declare function LogoJsonLd({ type, keyOverride, ...rest }: LogoJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default LogoJsonLd;
