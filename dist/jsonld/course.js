import { jsx as _jsx } from "react/jsx-runtime";
import { setProvider } from '../utils/schema/setProvider';
import { JsonLd } from './jsonld';
function CourseJsonLd({ type = 'Course', keyOverride, courseName, provider, ...rest }) {
    const data = {
        name: courseName,
        ...rest,
        provider: setProvider(provider),
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "course" }));
}
export default CourseJsonLd;
