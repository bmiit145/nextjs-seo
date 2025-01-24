export function setInstruction(instruction) {
    if (instruction) {
        return {
            ...instruction,
            '@type': 'HowToStep',
        };
    }
    return undefined;
}
