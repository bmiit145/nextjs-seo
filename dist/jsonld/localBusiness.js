import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setAddress } from '../utils/schema/setAddress';
import { setReviews } from '../utils/schema/setReviews';
import { setGeo } from '../utils/schema/setGeo';
import { setAggregateRating } from '../utils/schema/setAggregateRating';
import { setAction } from '../utils/schema/setAction';
import { setGeoCircle } from '../utils/schema/setGeoCircle';
import { setOffer } from '../utils/schema/setOffer';
import { setOpeningHours } from '../utils/schema/setOpeningHours';
function LocalBusinessJsonLd({ type = 'LocalBusiness', keyOverride, address, geo, rating, review, action, areaServed, makesOffer, openingHours, images, ...rest }) {
    const data = {
        ...rest,
        image: images,
        address: setAddress(address),
        geo: setGeo(geo),
        aggregateRating: setAggregateRating(rating),
        review: setReviews(review),
        potentialAction: setAction(action),
        areaServed: areaServed && areaServed.map(setGeoCircle),
        makesOffer: makesOffer?.map(setOffer),
        openingHoursSpecification: Array.isArray(openingHours)
            ? openingHours.map(setOpeningHours)
            : setOpeningHours(openingHours),
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "LocalBusiness" }));
}
export default LocalBusinessJsonLd;
