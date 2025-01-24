import type { Question } from '../../types';
export declare function setQuestions(questions: Question[]): {
    '@type': string;
    name: string;
    acceptedAnswer: {
        '@type': string;
        text: string;
    };
}[] | undefined;
