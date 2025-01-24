import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
function SocialProfileJsonLd({ type, keyOverride, ...rest }) {
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...rest, scriptKey: "social" }));
}
export default SocialProfileJsonLd;
