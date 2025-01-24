import { setImage } from './setImage';
export function setManufacturer(manufacturer) {
    if (manufacturer &&
        (manufacturer.manufacturerName || manufacturer.manufacturerLogo)) {
        return {
            '@type': 'Organization',
            name: manufacturer.manufacturerName,
            logo: setImage(manufacturer.manufacturerLogo),
        };
    }
    return undefined;
}
