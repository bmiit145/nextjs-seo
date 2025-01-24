export function setClip(clips) {
    function mapClip(clip) {
        return {
            ...clip,
            '@type': 'Clip',
        };
    }
    if (Array.isArray(clips)) {
        return clips.map(mapClip);
    }
    else if (clips) {
        return mapClip(clips);
    }
    return undefined;
}
