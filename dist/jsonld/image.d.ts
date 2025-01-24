import { JsonLdProps } from './jsonld';
type Creator = {
    '@type': 'Person' | 'Organization';
    name: string;
};
interface ImageJsonLd {
    contentUrl?: string;
    creator?: Creator;
    creditText?: string;
    copyrightNotice?: string;
    license?: string;
    acquireLicensePage?: string;
}
export interface ImageJsonLdProps extends JsonLdProps {
    images: ImageJsonLd[];
}
declare function ImageJsonLd({ keyOverride, images, ...rest }: ImageJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default ImageJsonLd;
