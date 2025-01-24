import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setReviewedBy } from '../utils/schema/setReviewedBy';
function WebPageJsonLd({ keyOverride, reviewedBy, ...rest }) {
    const data = {
        ...rest,
        reviewedBy: setReviewedBy(reviewedBy),
    };
    return (_jsx(JsonLd, { keyOverride: keyOverride, ...data, type: "WebPage", scriptKey: "WebPage" }));
}
export default WebPageJsonLd;
