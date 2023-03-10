import rss from "@astrojs/rss";
import { futureGigs, niceDate, cleanUrl } from "../../lib/tools";

export const get = async () =>
  rss({
    title: "Raw Funk Maharishi Gig Calendar",
    description: "Upcoming Raw Funk Maharishi shows",
    site: import.meta.env.SITE,
    xmlns: { atom: "http://www.w3.org/2005/Atom" },
    customData:
      '<atom:link href="' +
      import.meta.env.SITE +
      'gigs/rss.xml" rel="self" type="application/rss+xml" />',
    stylesheet: "/styles/rss.xsl",

    items: await futureGigs().then(function (gigs) {
      return gigs.map((gig) => {
        return {
          title: gig.location.name + ", " + niceDate(gig.startDate, true),
          link: cleanUrl(import.meta.env.SITE, gig.url),
          pubDate: new Date(),
        };
      });
    }),
  });
