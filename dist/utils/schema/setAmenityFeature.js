export function setAmenityFeature(amenityFeature) {
    if (!amenityFeature)
        return undefined;
    if (!Array.isArray(amenityFeature)) {
        return decorateAmenityFeature(amenityFeature);
    }
    if (amenityFeature.length === 1) {
        return decorateAmenityFeature(amenityFeature[0]);
    }
    return amenityFeature.map(decorateAmenityFeature);
}
function decorateAmenityFeature(amenity) {
    return {
        '@type': 'LocationFeatureSpecification',
        ...amenity,
    };
}
