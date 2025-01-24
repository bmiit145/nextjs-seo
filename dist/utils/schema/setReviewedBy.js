export function setReviewedBy(reviewedBy) {
    if (reviewedBy) {
        return {
            '@type': reviewedBy?.type || 'Organization',
            ...reviewedBy,
        };
    }
    return undefined;
}
