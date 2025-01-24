export function setOpeningHours(openingHours) {
    if (openingHours) {
        return {
            ...openingHours,
            '@type': 'OpeningHoursSpecification',
        };
    }
    return undefined;
}
