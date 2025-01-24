import { jsx as _jsx } from "react/jsx-runtime";
import { setItemListElements } from '../utils/schema/setItemListElements';
import { JsonLd } from './jsonld';
function BreadCrumbJsonLd({ type = 'BreadcrumbList', keyOverride, itemListElements, ...rest }) {
    const data = {
        ...rest,
        itemListElement: setItemListElements(itemListElements),
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "breadcrumb" }));
}
export default BreadCrumbJsonLd;
