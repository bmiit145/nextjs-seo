import { JsonLdProps } from './jsonld';
import type { CourseJsonLdProps, RecipeJsonLdProps } from '../index';
import type { Review, AggregateRating } from '../types';
type Director = {
    name: string;
};
interface DefaultDataProps {
    url: string;
}
interface ExtendedCourseJsonLdProps extends DefaultDataProps, CourseJsonLdProps {
}
interface ExtendedRecipeJsonLdProps extends DefaultDataProps, RecipeJsonLdProps {
}
export interface MovieJsonLdProps {
    name: string;
    url: string;
    image: string;
    dateCreated?: string;
    director?: Director | Director[];
    review?: Review;
    aggregateRating?: AggregateRating;
}
export interface CustomJsonLdProps {
    position?: number;
    name: string;
    type: string;
}
export interface CarouselJsonLdProps extends JsonLdProps {
    ofType: 'default' | 'movie' | 'recipe' | 'course' | 'custom';
    data: any | DefaultDataProps[] | MovieJsonLdProps[] | ExtendedCourseJsonLdProps[] | ExtendedRecipeJsonLdProps[] | CustomJsonLdProps[];
}
declare function CarouselJsonLd({ type, keyOverride, ofType, data, ...rest }: CarouselJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default CarouselJsonLd;
