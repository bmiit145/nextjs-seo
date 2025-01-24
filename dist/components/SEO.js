import { useEffect } from "react";
import { updateMetaTag, updateLinkTag } from "../utils/SEO.utils";
const defaultSEOSettings = {
    title: "Default Title",
    description: "Default description for the application.",
};
export const SEO = ({ title, description, themeColor, noindex, nofollow, robotsProps, canonical, openGraph, twitter, facebook, additionalMetaTags, titleTemplate, defaultTitle, mobileAlternate, languageAlternates, additionalLinkTags, norobots = false, }) => {
    useEffect(() => {
        const finalTitle = title || defaultSEOSettings.title;
        if (finalTitle) {
            document.title = finalTitle;
        }
        const finalDescription = description || defaultSEOSettings.description;
        if (finalDescription)
            updateMetaTag("description", finalDescription);
        // Open Graph Meta Tags
        if (openGraph) {
            if (openGraph.title)
                updateMetaTag("og:title", openGraph.title);
            if (openGraph.description)
                updateMetaTag("og:description", openGraph.description);
            if (openGraph.url)
                updateMetaTag("og:url", openGraph.url);
            if (openGraph.type)
                updateMetaTag("og:type", openGraph.type);
            if (openGraph.images && openGraph.images.length > 0) {
                openGraph.images.forEach((image, index) => {
                    updateMetaTag(`og:image:${index}`, image.url);
                });
            }
        }
        // Twitter Meta Tags
        if (twitter) {
            if (twitter.cardType)
                updateMetaTag("twitter:card", twitter.cardType);
            if (twitter.site)
                updateMetaTag("twitter:site", twitter.site);
            if (twitter.handle)
                updateMetaTag("twitter:creator", twitter.handle);
        }
        // Facebook Meta Tags
        if (facebook && facebook.appId) {
            updateMetaTag("fb:app_id", facebook.appId);
        }
        // Custom Meta Tags
        if (additionalMetaTags && additionalMetaTags.length > 0) {
            additionalMetaTags.forEach((meta) => {
                updateMetaTag(meta.name, meta.content);
            });
        }
        // Robots Meta Tag
        const robotContent = noindex || nofollow || norobots ? "noindex, nofollow" : "index, follow";
        if (robotsProps) {
            let robotsParams = "";
            for (const [key, value] of Object.entries(robotsProps)) {
                if (value)
                    robotsParams += `,${key}:${value}`;
            }
            updateMetaTag("robots", `${robotContent}${robotsParams}`);
        }
        if (canonical) {
            updateLinkTag("canonical", canonical);
        }
        // Theme Color Meta Tag
        if (themeColor) {
            updateMetaTag("theme-color", themeColor);
        }
        // Mobile Alternate Link Tag
        if (mobileAlternate) {
            let mobileLink = document.createElement("link");
            mobileLink.setAttribute("rel", "alternate");
            mobileLink.setAttribute("media", mobileAlternate.media);
            mobileLink.setAttribute("href", mobileAlternate.href);
            document.head.appendChild(mobileLink);
        }
        // Language Alternates Link Tags
        if (languageAlternates) {
            languageAlternates.forEach((alt) => {
                let languageLink = document.createElement("link");
                languageLink.setAttribute("rel", "alternate");
                languageLink.setAttribute("hrefLang", alt.hrefLang);
                languageLink.setAttribute("href", alt.href);
                document.head.appendChild(languageLink);
            });
        }
        // Additional Link Tags
        if (additionalLinkTags) {
            additionalLinkTags.forEach((linkTag) => {
                updateLinkTag(linkTag.rel, linkTag.href);
            });
        }
    }, [title, description, themeColor, noindex, nofollow, robotsProps, canonical, openGraph, twitter, facebook, additionalMetaTags, titleTemplate, defaultTitle, mobileAlternate, languageAlternates, additionalLinkTags, norobots]);
    return null;
};
