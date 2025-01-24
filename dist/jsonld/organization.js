import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setAddress } from '../utils/schema/setAddress';
import { setContactPoints } from '../utils/schema/setContactPoints';
function OrganizationJsonLd({ type = 'Organization', keyOverride, address, contactPoints, contactPoint, ...rest }) {
    const data = {
        ...rest,
        address: setAddress(address),
        contactPoint: setContactPoints(contactPoint || contactPoints),
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "organization" }));
}
export default OrganizationJsonLd;
