import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setReviews } from '../utils/schema/setReviews';
import { setAuthor } from '../utils/schema/setAuthor';
import { setNutrition } from '../utils/schema/setNutrition';
import { setAggregateRating } from '../utils/schema/setAggregateRating';
import { setVideo } from '../utils/schema/setVideo';
import { setInstruction } from '../utils/schema/setInstruction';
function CarouselJsonLd({ type = 'Carousel', keyOverride, ofType, data, ...rest }) {
    function generateList(data, ofType) {
        switch (ofType) {
            case 'default':
                return data.map((item, index) => ({
                    '@type': 'ListItem',
                    position: `${index + 1}`,
                    url: item.url,
                }));
            case 'course':
                return data.map((item, index) => ({
                    '@type': 'ListItem',
                    position: `${index + 1}`,
                    item: {
                        '@context': 'https://schema.org',
                        '@type': 'Course',
                        url: item.url,
                        name: item.courseName,
                        description: item.description,
                        provider: {
                            '@type': 'Organization',
                            name: item.providerName,
                            sameAs: item.providerUrl,
                        },
                    },
                }));
            case 'movie':
                return data.map((item, index) => ({
                    '@type': 'ListItem',
                    position: `${index + 1}`,
                    item: {
                        '@context': 'https://schema.org',
                        '@type': 'Movie',
                        name: item.name,
                        url: item.url,
                        image: item.image,
                        dateCreated: item.dateCreated,
                        director: item.director
                            ? Array.isArray(item.director)
                                ? item.director.map(director => ({
                                    '@type': 'Person',
                                    name: director.name,
                                }))
                                : {
                                    '@type': 'Person',
                                    name: item.director.name,
                                }
                            : undefined,
                        review: setReviews(item.review),
                    },
                }));
            case 'recipe':
                return data.map(({ authorName, images, yields, category, calories, aggregateRating, video, ingredients, instructions, cuisine, ...rest }, index) => ({
                    '@type': 'ListItem',
                    position: `${index + 1}`,
                    item: {
                        '@context': 'https://schema.org',
                        '@type': 'Recipe',
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
                        recipeInstructions: instructions.map(setInstruction),
                    },
                }));
            case 'custom':
                return data.map((item, index) => ({
                    '@type': 'ListItem',
                    position: item.position ?? index + 1,
                    item: {
                        '@type': item.type,
                        name: item.name,
                    },
                }));
        }
    }
    const jsonLdData = {
        '@type': 'ItemList',
        ...rest,
        itemListElement: generateList(data, ofType),
        ...rest,
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...jsonLdData, scriptKey: "Carousel" }));
}
export default CarouselJsonLd;
