import rss from "@astrojs/rss";
import { fetchFromAPI } from "../../tools";
import { niceDate } from "../../tools";

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
            title: gig.location.name + ", " + niceDate(gig.startDate, true),
            link: import.meta.env.SITE.slice(-1) + gig.url, // remove double-slash
            pubDate: new Date(),
          };
        });
      }),
  });
