export function setGeoCircle(geoCircle) {
    if (geoCircle) {
        return {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: geoCircle.geoMidpoint.latitude,
                longitude: geoCircle.geoMidpoint.longitude,
            },
            geoRadius: geoCircle.geoRadius,
        };
    }
    return undefined;
}
