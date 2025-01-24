import { jsx as _jsx } from "react/jsx-runtime";
import Head from 'next/head';
import toJson from '../utils/toJson';
function JsonLd({ type = 'Thing', keyOverride, scriptKey, scriptId = undefined, dataArray, useAppDir = false, ...rest }) {
    const JsonLdScript = () => (_jsx("script", { type: "application/ld+json", id: scriptId, "data-testid": scriptId, dangerouslySetInnerHTML: toJson(type, dataArray === undefined ? { ...rest } : dataArray) }, `jsonld-${scriptKey}${keyOverride ? `-${keyOverride}` : ''}`));
    if (useAppDir) {
        return _jsx(JsonLdScript, {});
    }
    return _jsx(Head, { children: JsonLdScript() });
}
export { JsonLd };
