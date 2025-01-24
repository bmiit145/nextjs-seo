export function setBrand(brand) {
    if (brand) {
        return {
            '@type': 'Brand',
            name: brand,
        };
    }
    return undefined;
}
