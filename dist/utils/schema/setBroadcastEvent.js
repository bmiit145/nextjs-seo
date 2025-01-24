export function setBroadcastEvent(publication) {
    function mapBroadcastEvent(publication) {
        return {
            ...publication,
            '@type': 'BroadcastEvent',
        };
    }
    if (publication) {
        if (Array.isArray(publication)) {
            return publication.map(mapBroadcastEvent);
        }
        return mapBroadcastEvent(publication);
    }
    return undefined;
}
