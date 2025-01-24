export function setPerformer(performer) {
    if (performer) {
        const { type, ...restPerformer } = performer;
        return {
            ...restPerformer,
            '@type': type || 'PerformingGroup',
        };
    }
    return undefined;
}
