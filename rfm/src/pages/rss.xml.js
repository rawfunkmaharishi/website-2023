import rss from "@astrojs/rss";
import { fetchFromAPI } from "../tools";
 // TODO: fix publish data, at least
export const get = async () =>
  rss({
    title: "Raw Funk Maharishi Gig Calendar",
    description: "Upcoming Raw Funk Maharishi shows",
    site: import.meta.env.SITE,
    stylesheet: "/styles.xsl",

    items: await fetchFromAPI("gigs")
      .then(function (gigs) {
        return gigs.filter((gig) => new Date(gig.startDate) > new Date());
      })
      .then(function (gigs) {
        return gigs.map((gig) => {
          return {
            link: import.meta.env.SITE.slice(-1) + gig.url, // remove double-slash
            pubDate: gig.startDate.slice(0, 10),
            title: gig.location.name,
          };
        });
      }),
  });
