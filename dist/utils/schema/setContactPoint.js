export function setContactPoint(contactPoint) {
    if (contactPoint) {
        return {
            ...contactPoint,
            '@type': 'ContactPoint',
        };
    }
    return undefined;
}
