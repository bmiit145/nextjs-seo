export function setQuestions(questions) {
    if (questions && questions.length) {
        return questions.map(question => ({
            '@type': 'Question',
            name: question.questionName,
            acceptedAnswer: {
                '@type': 'Answer',
                text: question.acceptedAnswerText,
            },
        }));
    }
    return undefined;
}
