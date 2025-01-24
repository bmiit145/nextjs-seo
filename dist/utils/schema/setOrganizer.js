export function setOrganizer(organizer) {
    if (organizer) {
        const { type, ...restOrganizer } = organizer;
        return {
            ...restOrganizer,
            '@type': type || 'Person',
        };
    }
    return undefined;
}
