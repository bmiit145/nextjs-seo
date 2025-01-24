import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setGeo } from '../utils/schema/setGeo';
import { setAddress } from '../utils/schema/setAddress';
import { setOpeningHours } from '../utils/schema/setOpeningHours';
function ParkJsonLd({ address, geo, images, keyOverride, openingHours, type = 'Park', ...rest }) {
    const data = {
        image: images,
        openingHoursSpecification: Array.isArray(openingHours)
            ? openingHours.map(setOpeningHours)
            : setOpeningHours(openingHours),
        address: setAddress(address),
        geo: setGeo(geo),
        ...rest,
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "park" }));
}
export default ParkJsonLd;
