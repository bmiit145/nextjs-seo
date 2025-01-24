import { setAddress } from './setAddress';
export function setLocation(location) {
    if (!location) {
        return undefined;
    }
    if (typeof location === 'string') {
        return location;
    }
    if ('url' in location) {
        return setVirtualLocation(location);
    }
    else {
        return setPlace(location);
    }
}
function setVirtualLocation(location) {
    return {
        ...location,
        '@type': 'VirtualLocation',
    };
}
function setPlace(location) {
    return {
        ...location,
        address: setAddress(location.address),
        '@type': 'Place',
    };
}
