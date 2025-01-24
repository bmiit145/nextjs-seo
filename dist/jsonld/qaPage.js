import { jsx as _jsx } from "react/jsx-runtime";
import { setAuthor } from '../utils/schema/setAuthor';
import { JsonLd } from './jsonld';
function QAPageJsonLd({ type = 'QAPage', keyOverride, mainEntity, ...rest }) {
    const data = {
        ...rest,
        mainEntity: {
            ...mainEntity,
            '@type': 'Question',
            author: setAuthor(mainEntity.author),
            ...(mainEntity.acceptedAnswer && {
                acceptedAnswer: {
                    ...mainEntity.acceptedAnswer,
                    '@type': 'Answer',
                    author: setAuthor(mainEntity.acceptedAnswer?.author),
                },
            }),
            ...(mainEntity.suggestedAnswer && {
                suggestedAnswer: mainEntity.suggestedAnswer.map(({ upvoteCount, ...rest }) => ({
                    ...rest,
                    '@type': 'Answer',
                    upvoteCount: upvoteCount || 0,
                    author: setAuthor(rest.author),
                })),
            }),
        },
    };
    return (_jsx(JsonLd, { type: type, keyOverride: keyOverride, ...data, scriptKey: "QAPage" }));
}
export default QAPageJsonLd;
