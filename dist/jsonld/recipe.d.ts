import { JsonLdProps } from './jsonld';
import type { Instruction, AggregateRating, Video } from '../types';
export interface RecipeJsonLdProps extends JsonLdProps {
    name: string;
    description: string;
    authorName: string | string[];
    ingredients: string[];
    instructions: Instruction[];
    images?: string[];
    datePublished?: string;
    prepTime?: string;
    cookTime?: string;
    totalTime?: string;
    keywords?: string;
    yields?: string;
    category?: string;
    cuisine?: string;
    calories?: number;
    aggregateRating?: AggregateRating;
    video?: Video;
}
declare function RecipeJsonLd({ type, keyOverride, authorName, images, yields, category, cuisine, calories, aggregateRating, video, ingredients, instructions, ...rest }: RecipeJsonLdProps): import("react/jsx-runtime").JSX.Element;
export default RecipeJsonLd;
