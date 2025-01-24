export function setCreativeWork(creativeWork) {
    if (creativeWork) {
        return {
            ...creativeWork,
            '@type': 'CreativeWork',
        };
    }
    return undefined;
}
