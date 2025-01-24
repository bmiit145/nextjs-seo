export function setProducer(producer) {
    if (producer) {
        return {
            '@type': 'Organization',
            sameAs: producer.url,
            name: producer.name,
        };
    }
    return undefined;
}
