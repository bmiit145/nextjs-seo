export function setNutrition(calories) {
    if (calories) {
        return {
            '@type': 'NutritionInformation',
            calories: `${calories} calories`,
        };
    }
    return undefined;
}
