import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setGeo } from '../utils/schema/setGeo';
import { setAddress } from '../utils/schema/setAddress';
import { setOpeningHours } from '../utils/schema/setOpeningHours';
import { setAmenityFeature } from '../utils/schema/setAmenityFeature';
import { setAggregateRating } from '../utils/schema/setAggregateRating';
function CampgroundJsonLd({ address, geo, images, keyOverride, openingHours, type = 'Campground', amenityFeature, rating, ...rest }) {
    const data = {
        image: images,
        openingHoursSpecification: Array.isArray(openingHours)
            ? openingHours.map(setOpeningHours)
            : setOpeningHours(openingHours),
        address: setAddress(address),
        geo: setGeo(geo),
        amenityFeature: setAmenityFeature(amenityFeature),
        aggregateRating: setAggregateRating(rating),
        ...rest,
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "campground" }));
}
export default CampgroundJsonLd;
