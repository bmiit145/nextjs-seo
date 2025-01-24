export function setAggregateRating(aggregateRating) {
    if (aggregateRating) {
        return {
            '@type': 'AggregateRating',
            ratingCount: aggregateRating.ratingCount,
            reviewCount: aggregateRating.reviewCount,
            bestRating: aggregateRating.bestRating,
            ratingValue: aggregateRating.ratingValue,
            worstRating: aggregateRating.worstRating,
        };
    }
    return undefined;
}
