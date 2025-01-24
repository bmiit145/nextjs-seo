import { Video } from '../types';
import { JsonLdProps } from './jsonld';
export interface VideoJsonLdProps extends JsonLdProps, Video {
}
declare function VideoJsonLd({ type, keyOverride, ...rest }: VideoJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default VideoJsonLd;
