import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
function SiteLinksSearchBoxJsonLd({ type = 'WebSite', keyOverride, potentialActions, ...rest }) {
    function setPotentialAction(action) {
        if (action) {
            const { target, queryInput } = action;
            return {
                '@type': 'SearchAction',
                target: `${target}={${queryInput}}`,
                'query-input': `required name=${queryInput}`,
            };
        }
        return undefined;
    }
    const data = {
        ...rest,
        potentialAction: potentialActions.map(setPotentialAction),
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "jsonld-siteLinksSearchBox" }));
}
export default SiteLinksSearchBoxJsonLd;
