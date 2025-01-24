export function setContactPoints(contactPoint) {
    if (contactPoint && contactPoint.length) {
        return contactPoint.map(contactPoint => ({
            '@type': 'ContactPoint',
            ...contactPoint,
        }));
    }
    return undefined;
}
