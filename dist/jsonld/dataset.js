import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
function DatasetJsonLd({ type = 'Dataset', keyOverride, ...rest }) {
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...rest, scriptKey: "dataset" }));
}
export default DatasetJsonLd;
