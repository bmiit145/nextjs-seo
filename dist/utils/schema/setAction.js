export function setAction(action) {
    if (action) {
        return {
            '@type': action.actionType,
            name: action.actionName,
            target: action.target,
        };
    }
    return undefined;
}
