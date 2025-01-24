export function setReviewRating(rating) {
    if (rating) {
        return { ...rating, '@type': 'Rating' };
    }
    return undefined;
}
