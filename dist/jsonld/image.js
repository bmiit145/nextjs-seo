import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
function ImageJsonLd({ keyOverride, images, ...rest }) {
    return (_jsx(JsonLd, { ...rest, type: "ImageObject", keyOverride: keyOverride, dataArray: images, scriptKey: "image" }));
}
export default ImageJsonLd;
