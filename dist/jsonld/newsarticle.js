import { jsx as _jsx } from "react/jsx-runtime";
import { setAuthor } from '../utils/schema/setAuthor';
import { setPublisher } from '../utils/schema/setPublisher';
import { JsonLd } from './jsonld';
function NewsArticleJsonLd({ type = 'NewsArticle', keyOverride, url, title, images, section, dateCreated, datePublished, dateModified, authorName, authorType, publisherName, publisherLogo, body, isAccessibleForFree, ...rest }) {
    const data = {
        ...rest,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': url,
        },
        headline: title,
        image: images,
        articleSection: section,
        dateCreated: dateCreated || datePublished,
        datePublished: datePublished,
        dateModified: dateModified || datePublished,
        author: setAuthor(authorName),
        publisher: setPublisher(publisherName, publisherLogo),
        articleBody: body,
        isAccessibleForFree: isAccessibleForFree,
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "NewsArticle" }));
}
export default NewsArticleJsonLd;
