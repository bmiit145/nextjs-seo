export function setGeo(geo) {
    if (geo) {
        return {
            ...geo,
            '@type': 'GeoCoordinates',
        };
    }
    return undefined;
}
