import { jsx as _jsx } from "react/jsx-runtime";
import { setAggregateRating } from '../utils/schema/setAggregateRating';
import { JsonLd } from './jsonld';
function BrandJsonLd({ type = 'Brand', id, keyOverride, aggregateRating, ...rest }) {
    const data = {
        aggregateRating: setAggregateRating(aggregateRating),
        '@id': id,
        ...rest,
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "brand" }));
}
export default BrandJsonLd;
