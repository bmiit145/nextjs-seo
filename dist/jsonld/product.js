import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setOffers } from '../utils/schema/setOffers';
import { setReviews } from '../utils/schema/setReviews';
import { setAggregateRating } from '../utils/schema/setAggregateRating';
import { setAggregateOffer } from '../utils/schema/setAggregateOffer';
import { setManufacturer } from '../utils/schema/setManufacturer';
import { setBrand } from '../utils/schema/setBrand';
function ProductJsonLd({ type = 'Product', keyOverride, images, brand, reviews, aggregateRating, manufacturerLogo, manufacturerName, offers, aggregateOffer, productName, ...rest }) {
    const data = {
        ...rest,
        image: images,
        brand: setBrand(brand),
        review: setReviews(reviews),
        aggregateRating: setAggregateRating(aggregateRating),
        manufacturer: setManufacturer({ manufacturerLogo, manufacturerName }),
        offers: offers ? setOffers(offers) : setAggregateOffer(aggregateOffer),
        name: productName,
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "Product" }));
}
export default ProductJsonLd;
