import { jsx as _jsx } from "react/jsx-runtime";
import { JsonLd } from './jsonld';
import { setAuthor } from '../utils/schema/setAuthor';
import { setPublisher } from '../utils/schema/setPublisher';
function ArticleJsonLd({ type = 'Article', keyOverride, url, title, images, datePublished, dateModified, authorName, publisherName = undefined, publisherLogo = undefined, description, isAccessibleForFree, ...rest }) {
    const data = {
        datePublished,
        description,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
        headline: title,
        image: images,
        dateModified: dateModified || datePublished,
        author: setAuthor(authorName),
        publisher: setPublisher(publisherName, publisherLogo),
        isAccessibleForFree: isAccessibleForFree,
        ...rest,
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "article" }));
}
export default ArticleJsonLd;
