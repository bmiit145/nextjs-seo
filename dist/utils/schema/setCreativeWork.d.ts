import { CreativeWork } from '../../types';
export declare function setCreativeWork(creativeWork: CreativeWork): {
    '@type': string;
    author: string;
    about: string;
    name: string;
    datePublished: string;
    audience?: string;
    keywords?: string;
    thumbnailUrl?: string;
    image?: string;
} | undefined;
