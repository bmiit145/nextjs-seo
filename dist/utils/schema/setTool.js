export function setTool(tool) {
    if (tool) {
        return tool.map(toolItem => ({
            '@type': 'HowToTool',
            name: toolItem,
        }));
    }
    return undefined;
}
