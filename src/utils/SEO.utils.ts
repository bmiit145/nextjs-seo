export const updateMetaTag = (name: string, content: string) => {
    let tag = document.querySelector(`meta[name="${name}"]`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };
  
  export const updateLinkTag = (rel: string, href: string) => {
    let linkTag = document.querySelector(`link[rel="${rel}"]`);
    if (!linkTag) {
      linkTag = document.createElement("link");
      linkTag.setAttribute("rel", rel);
      document.head.appendChild(linkTag);
    }
    linkTag.setAttribute("href", href);
  };
  