import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
function LogoJsonLd({ type = 'Organization', keyOverride, ...rest }) {
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...rest, scriptKey: "Logo" }));
}
export default LogoJsonLd;
