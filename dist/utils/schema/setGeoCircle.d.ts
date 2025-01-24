import { GeoCircle } from '../../types';
export declare function setGeoCircle(geoCircle?: GeoCircle): {
    '@type': string;
    geoMidpoint: {
        '@type': string;
        latitude: string;
        longitude: string;
    };
    geoRadius: string;
} | undefined;
