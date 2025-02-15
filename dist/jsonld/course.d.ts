import type { Provider } from '../types';
import { JsonLdProps } from './jsonld';
export interface CourseJsonLdProps extends JsonLdProps {
    courseName: string;
    description: string;
    provider: Provider;
}
declare function CourseJsonLd({ type, keyOverride, courseName, provider, ...rest }: CourseJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default CourseJsonLd;
