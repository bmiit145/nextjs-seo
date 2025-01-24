import React from 'react';

import type { Question } from '../types';
import { setAuthor } from '../utils/schema/setAuthor';

import { JsonLd, JsonLdProps } from './jsonld';

export interface QAPageJsonLdProps extends JsonLdProps {
  mainEntity: Question;
}

function QAPageJsonLd({
  type = 'QAPage',
  keyOverride,
  mainEntity,
  ...rest
}: QAPageJsonLdProps) {
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
        suggestedAnswer: mainEntity.suggestedAnswer.map(
          ({ upvoteCount, ...rest }) => ({
            ...rest,
            '@type': 'Answer',
            upvoteCount: upvoteCount || 0,
            author: setAuthor(rest.author),
          }),
        ),
      }),
    },
  };

  return (
    <JsonLd
      type={type}
      keyOverride={keyOverride}
      {...data}
      scriptKey="QAPage"
    />
  );
}

export default QAPageJsonLd;
