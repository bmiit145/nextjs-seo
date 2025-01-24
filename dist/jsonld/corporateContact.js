import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setContactPoint } from '../utils/schema/setContactPoint';
function CorporateContactJsonLd({ type = 'Organization', keyOverride, contactPoint, ...rest }) {
    const data = {
        ...rest,
        contactPoint: contactPoint.map(setContactPoint),
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "CorporateContact" }));
}
export default CorporateContactJsonLd;
