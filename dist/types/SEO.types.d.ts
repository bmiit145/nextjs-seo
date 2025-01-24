export interface SEOProps {
    title?: string;
    description?: string;
    themeColor?: string;
    noindex?: boolean;
    nofollow?: boolean;
    robotsProps?: {
        nosnippet?: boolean;
        maxSnippet?: string;
        maxImagePreview?: string;
        maxVideoPreview?: string;
        noarchive?: boolean;
        noimageindex?: boolean;
        notranslate?: boolean;
        unavailableAfter?: string;
    };
    canonical?: string;
    openGraph?: {
        title?: string;
        description?: string;
        url?: string;
        type?: string;
        images?: Array<{
            url: string;
            alt?: string;
        }>;
        videos?: Array<{
            url: string;
            type?: string;
            width?: number;
            height?: number;
        }>;
        profile?: {
            firstName?: string;
            lastName?: string;
            username?: string;
            gender?: string;
        };
        book?: {
            authors?: string[];
            isbn?: string;
            releaseDate?: string;
            tags?: string[];
        };
        article?: {
            publishedTime?: string;
            modifiedTime?: string;
            expirationTime?: string;
            authors?: string[];
            section?: string;
            tags?: string[];
        };
        video?: {
            actors?: Array<{
                profile: string;
                role?: string;
            }>;
            directors?: string[];
            writers?: string[];
            duration?: number;
            releaseDate?: string;
            tags?: string[];
            series?: string;
        };
    };
    twitter?: {
        cardType?: string;
        site?: string;
        handle?: string;
    };
    facebook?: {
        appId?: string;
    };
    additionalMetaTags?: Array<{
        name: string;
        content: string;
    }>;
    titleTemplate?: string;
    defaultTitle?: string;
    mobileAlternate?: {
        media: string;
        href: string;
    };
    languageAlternates?: Array<{
        hrefLang: string;
        href: string;
    }>;
    additionalLinkTags?: Array<{
        rel: string;
        href: string;
    }>;
    norobots?: boolean;
}
