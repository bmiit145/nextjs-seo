import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setVideo } from '../utils/schema/setVideo';
function VideoJsonLd({ type = 'Video', keyOverride, ...rest }) {
    const data = setVideo(rest, true);
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "Video" }));
}
export default VideoJsonLd;
