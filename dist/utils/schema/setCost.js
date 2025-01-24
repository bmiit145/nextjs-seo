export function setCost(cost) {
    if (cost) {
        return {
            ...cost,
            '@type': 'MonetaryAmount',
        };
    }
    return undefined;
}
