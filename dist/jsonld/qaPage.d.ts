import type { Question } from '../types';
import { JsonLdProps } from './jsonld';
export interface QAPageJsonLdProps extends JsonLdProps {
    mainEntity: Question;
}
declare function QAPageJsonLd({ type, keyOverride, mainEntity, ...rest }: QAPageJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default QAPageJsonLd;
