import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setItemListElements } from '../utils/schema/setItemListElements';
function ProfilePageJsonLd({ type = 'ProfilePage', keyOverride, breadcrumb, ...rest }) {
    const data = {
        ...rest,
        breadcrumb: Array.isArray(breadcrumb)
            ? {
                '@type': 'BreadcrumbList',
                itemListElement: setItemListElements(breadcrumb),
            }
            : breadcrumb,
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "ProfilePage" }));
}
export default ProfilePageJsonLd;
