import { setClip } from './setClip';
import { setInteractionStatistic } from './setInteractionStatistic';
import { setBroadcastEvent } from './setBroadcastEvent';
export function setVideo(video, setContext = false) {
    function mapVideo({ thumbnailUrls, hasPart, watchCount, publication, ...rest }, context) {
        return {
            ...rest,
            '@type': 'VideoObject',
            ...(context && { '@context': 'https://schema.org' }),
            thumbnailUrl: thumbnailUrls,
            hasPart: setClip(hasPart),
            interactionStatistic: setInteractionStatistic(watchCount),
            publication: setBroadcastEvent(publication),
        };
    }
    if (video) {
        return mapVideo(video, setContext);
    }
    return undefined;
}
