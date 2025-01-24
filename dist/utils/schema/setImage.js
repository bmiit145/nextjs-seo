export function setImage(image) {
    if (image) {
        return { '@type': 'ImageObject', url: image };
    }
    return undefined;
}
