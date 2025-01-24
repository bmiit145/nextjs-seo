import { setImage } from './setImage';
export function setPublisher(publisherName, publisherLogo) {
    if (!publisherName) {
        return undefined;
    }
    return {
        '@type': 'Organization',
        name: publisherName,
        logo: setImage(publisherLogo),
    };
}
