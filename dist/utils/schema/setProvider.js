export function setProvider(provider) {
    if (provider) {
        return {
            '@type': provider.type || 'Organization',
            name: provider.name,
            sameAs: provider.url,
        };
    }
    return undefined;
}
