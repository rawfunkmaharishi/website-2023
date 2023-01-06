import rss from "@astrojs/rss";
import { futureGigs } from "../../tools";
import { niceDate } from "../../tools";

export const get = async () =>
  rss({
    title: "Raw Funk Maharishi Gig Calendar",
    description: "Upcoming Raw Funk Maharishi shows",
    site: import.meta.env.SITE,
    stylesheet: "/styles.xsl",

    items: await futureGigs().then(function (gigs) {
      return gigs.map((gig) => {
        return {
          title: gig.location.name + ", " + niceDate(gig.startDate, true),
          link: import.meta.env.SITE.slice(-1) + gig.url, // remove double-slash
          pubDate: new Date(),
        };
      });
    }),
  });
