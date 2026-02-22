import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SEOProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  preloadImage?: string; // NEW (optional)
};

function upsertMeta(
  nameOrProperty: "name" | "property",
  key: string,
  content: string
) {
  const selector = `meta[${nameOrProperty}="${key}"]`;
  let el = document.head.querySelector(selector) as HTMLMetaElement | null;

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(nameOrProperty, key);
    document.head.appendChild(el);
  }

  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  const selector = `link[rel="${rel}"]`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }

  el.setAttribute("href", href);
}

// NEW helper for preload
function upsertPreloadImage(href: string) {
  const selector = `link[rel="preload"][as="image"][href="${href}"]`;
  let el = document.head.querySelector(selector) as HTMLLinkElement | null;

  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "preload");
    el.setAttribute("as", "image");
    el.setAttribute("href", href);
    document.head.appendChild(el);
  }
}

export default function SEO({
  title,
  description,
  canonicalPath,
  preloadImage
}: SEOProps) {
  const location = useLocation();

  useEffect(() => {
    const origin = window.location.origin;

    document.title = title;

    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", "index, follow");

    const path = canonicalPath ?? location.pathname;
    upsertLink("canonical", `${origin}${path}`);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", `${origin}${location.pathname}`);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title);
    upsertMeta("name", "twitter:description", description);

    // NEW — preload hero image
    if (preloadImage) {
      upsertPreloadImage(preloadImage);
    }

  }, [title, description, canonicalPath, preloadImage, location.pathname]);

  return null;
}