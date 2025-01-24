import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
function HEREJsonLd({ type = 'HERE', keyOverride, ...rest }) {
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...rest, scriptKey: "HERE" }));
}
export default HEREJsonLd;
