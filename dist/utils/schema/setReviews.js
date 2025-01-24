import { setAuthor } from './setAuthor';
import { setPublisher } from './setPublisher';
import { setReviewRating } from './setReviewRating';
export function setReviews(reviews) {
    function mapReview({ reviewRating, author, publisher, ...rest }) {
        return {
            ...rest,
            '@type': 'Review',
            ...(author && { author: setAuthor(author) }),
            ...(reviewRating && { reviewRating: setReviewRating(reviewRating) }),
            ...(publisher && { publisher: setPublisher(publisher.name) }),
        };
    }
    if (Array.isArray(reviews)) {
        return reviews.map(mapReview);
    }
    else if (reviews) {
        return mapReview(reviews);
    }
    return undefined;
}
