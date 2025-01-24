import { jsx as _jsx } from "react/jsx-runtime";
import { setAggregateRating } from '../utils/schema/setAggregateRating';
import { setAuthor } from '../utils/schema/setAuthor';
import { setImage } from '../utils/schema/setImage';
import { setOffers } from '../utils/schema/setOffers';
import { setProducer } from '../utils/schema/setProducer';
import { setProvider } from '../utils/schema/setProvider';
import { setReviews } from '../utils/schema/setReviews';
import { setVideo } from '../utils/schema/setVideo';
import { JsonLd } from './jsonld';
function VideoGameJsonLd({ type = 'VideoGame', keyOverride, aggregateRating, trailer, reviews, image, authorName, provider, producerName, producerUrl, offers, operatingSystemName, platformName, translatorName, languageName, genreName, publisherName, ...rest }) {
    const data = {
        ...rest,
        aggregateRating: setAggregateRating(aggregateRating),
        trailer: setVideo(trailer),
        review: setReviews(reviews),
        image: setImage(image),
        author: setAuthor(authorName),
        provider: setProvider(provider),
        producer: setProducer({ name: producerName, url: producerUrl }),
        offers: setOffers(offers),
        operatingSystem: operatingSystemName,
        gamePlatform: platformName,
        translator: translatorName,
        inLanguage: languageName,
        genre: genreName,
        publisher: publisherName,
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "VideoGame" }));
}
export default VideoGameJsonLd;
