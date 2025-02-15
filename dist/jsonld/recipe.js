import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setAggregateRating } from '../utils/schema/setAggregateRating';
import { setAuthor } from '../utils/schema/setAuthor';
import { setVideo } from '../utils/schema/setVideo';
import { setInstruction } from '../utils/schema/setInstruction';
import { setNutrition } from '../utils/schema/setNutrition';
function RecipeJsonLd({ type = 'Recipe', keyOverride, authorName, images, yields, category, cuisine, calories, aggregateRating, video, ingredients, instructions, ...rest }) {
    const data = {
        ...rest,
        author: setAuthor(authorName),
        image: images,
        recipeYield: yields,
        recipeCategory: category,
        recipeCuisine: cuisine,
        nutrition: setNutrition(calories),
        aggregateRating: setAggregateRating(aggregateRating),
        video: setVideo(video),
        recipeIngredient: ingredients,
        recipeInstructions: instructions
            ? instructions.map(setInstruction)
            : undefined,
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "recipe" }));
}
export default RecipeJsonLd;
