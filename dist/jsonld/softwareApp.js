import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setAggregateRating } from '../utils/schema/setAggregateRating';
import { setReviews } from '../utils/schema/setReviews';
function SoftwareAppJsonLd({ type = 'SoftwareApplication', keyOverride, priceCurrency, price, aggregateRating, review, keywords, ...rest }) {
    const data = {
        ...rest,
        offers: {
            '@type': 'Offer',
            price,
            priceCurrency: priceCurrency,
        },
        aggregateRating: setAggregateRating(aggregateRating),
        review: setReviews(review),
        keywords,
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "SoftwareApp" }));
}
export default SoftwareAppJsonLd;
