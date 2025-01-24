export function setSupply(supply) {
    if (supply) {
        return supply.map(supplyItem => ({
            '@type': 'HowToSupply',
            name: supplyItem,
        }));
    }
    return undefined;
}
