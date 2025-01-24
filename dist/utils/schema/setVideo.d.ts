import type { Video } from '../../types';
export declare function setVideo(video?: Video, setContext?: boolean): {
    thumbnailUrl: string[];
    hasPart: {
        '@type': string;
        name: string;
        startOffset: number;
        url: string;
    } | {
        '@type': string;
        name: string;
        startOffset: number;
        url: string;
    }[] | undefined;
    interactionStatistic: {
        '@type': string;
        interactionType: string;
        userInteractionCount: number;
    } | undefined;
    publication: {
        '@type': string;
        name?: string;
        isLiveBroadcast?: boolean | undefined;
        startDate?: string | undefined;
        endDate?: string | undefined;
    } | {
        '@type': string;
        name?: string;
        isLiveBroadcast?: boolean | undefined;
        startDate?: string | undefined;
        endDate?: string | undefined;
    }[] | undefined;
    '@context'?: string | undefined;
    '@type': string;
    name: string;
    description: string;
    uploadDate: string;
    contentUrl?: string;
    duration?: string;
    embedUrl?: string;
    expires?: string;
    regionsAllowed?: string | string[];
} | undefined;
