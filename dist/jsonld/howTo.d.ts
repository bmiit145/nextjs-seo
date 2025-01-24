import { JsonLdProps } from './jsonld';
import { PriceSpecification, Step } from '../types';
export interface HowToJsonLdProps extends JsonLdProps {
    name: string;
    image?: string;
    estimatedCost?: PriceSpecification;
    supply?: string[];
    tool?: string[];
    step: Step[];
    totalTime?: string;
}
declare function howToJsonLd({ type, keyOverride, image, estimatedCost, supply, tool, step, ...rest }: HowToJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default howToJsonLd;
