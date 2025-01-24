import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setQuestions } from '../utils/schema/setQuestions';
function FAQPageJsonLd({ type = 'FAQPage', keyOverride, mainEntity, ...rest }) {
    const data = {
        ...rest,
        mainEntity: setQuestions(mainEntity),
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "faq-page" }));
}
export default FAQPageJsonLd;
