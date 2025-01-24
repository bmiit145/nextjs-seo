const toJson = (type, jsonld) => {
    let data = jsonld;
    if (Array.isArray(data) && data.length === 1) {
        data = { ...jsonld[0] };
    }
    const jsonLdObject = Array.isArray(data)
        ? data.map(item => formatObjectForSchema(type, item))
        : formatObjectForSchema(type, data);
    return {
        __html: JSON.stringify(jsonLdObject, safeJsonLdReplacer),
    };
};
const formatObjectForSchema = (type, jsonld) => {
    const { id = undefined } = jsonld;
    const updated = {
        ...(id ? { '@id': jsonld.id } : {}),
        ...jsonld,
    };
    delete updated.id;
    return {
        '@context': 'https://schema.org',
        '@type': type,
        ...updated,
    };
};
const ESCAPE_ENTITIES = Object.freeze({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
});
const ESCAPE_REGEX = new RegExp(`[${Object.keys(ESCAPE_ENTITIES).join('')}]`, 'g');
const ESCAPE_REPLACER = (t) => ESCAPE_ENTITIES[t];
/**
 * A replacer for JSON.stringify to strip JSON-LD of illegal HTML entities
 * per https://www.w3.org/TR/json-ld11/#restrictions-for-contents-of-json-ld-script-elements
 */
const safeJsonLdReplacer = (() => {
    // Replace per https://www.w3.org/TR/json-ld11/#restrictions-for-contents-of-json-ld-script-elements
    // Solution from https://stackoverflow.com/a/5499821/864313
    return (_, value) => {
        switch (typeof value) {
            case 'object':
                // Omit null values.
                if (value === null) {
                    return undefined;
                }
                return value; // JSON.stringify will recursively call replacer.
            case 'number':
            case 'boolean':
            case 'bigint':
                return value; // These values are not risky.
            case 'string':
                return value.replace(ESCAPE_REGEX, ESCAPE_REPLACER);
            default: {
                // We shouldn't expect other types.
                isNever(value);
                // JSON.stringify will remove this element.
                return undefined;
            }
        }
    };
})();
// Utility: Assert never
function isNever(_) { }
export const stringify = (data) => JSON.stringify(data, safeJsonLdReplacer);
export default toJson;
