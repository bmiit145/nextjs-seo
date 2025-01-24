import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setCreativeWork } from '../utils/schema/setCreativeWork';
function CollectionPageJsonLd({ type = 'CollectionPage', keyOverride, hasPart, ...rest }) {
    const data = {
        ...rest,
        hasPart: hasPart.map(setCreativeWork),
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "CollectionPage" }));
}
export default CollectionPageJsonLd;
