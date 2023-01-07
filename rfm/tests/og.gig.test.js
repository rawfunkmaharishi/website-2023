import { ogFromJSON } from "../src/lib/OpenGraph";

it("gets the data", () => {
  const og = new ogFromJSON(data, "https://somesite.com");
  expect(og.render()).toEqual(String.raw`
  <meta property="og:description" content="Raw Funk Maharishi live at Luna Lounge on Thursday December 14th" />
  <meta property="og:image" content="https://somesite.co/logos/rfm.png" />
  <meta property="og:title" content="Raw Funk Maharishi live at Luna Lounge" />
  <meta property="og:type" content="event" />
  <meta property="og:url" content="https://somesite.co/gigs/2023/12/14/luna" />
`);
});

const data = {
  "@context": "https://schema.org",
  "@type": "MusicEvent",
  isAccessibleForFree: true,
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "United Kingdom",
      streetAddress: "7 Church Lane, E11 1HG",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 51.5682837,
      longitude: 0.0101648,
    },
    name: "Luna Lounge",
    url: "https://www.lunalivemusic.com/",
  },
  name: "Raw Funk Maharishi live at Luna Lounge",
  performer: {
    "@type": "MusicGroup",
    aggregateRating: [
      {
        "@type": "AggregateRating",
        ratingValue: 5,
        reviewCount: 4,
      },
    ],
    member: [
      {
        "@type": "Person",
        image: {
          "@type": "ImageObject",
          contentUrl: "/the-band/joe.png",
          name: "Joe",
        },
        knowsAbout: "Guitar",
        name: "Joe",
      },
      {
        "@type": "Person",
        image: {
          "@type": "ImageObject",
          contentUrl: "/the-band/matt.png",
          name: "Matt",
        },
        knowsAbout: "Bass",
        name: "Matt",
      },
      {
        "@type": "Person",
        image: {
          "@type": "ImageObject",
          contentUrl: "/the-band/sam.png",
          name: "Sam",
        },
        knowsAbout: "Drums",
        name: "Sam",
        url: "https://sam.pikesley.org",
      },
    ],
    name: "Raw Funk Maharishi",
    review: [
      {
        "@type": "Review",
        author: {
          name: 'review["source"]',
          type: "Person",
        },
        reviewBody: "You remind me of Steely Dan without the vocals",
        url: "https://twitter.com/dwt_music",
      },
      {
        "@type": "Review",
        author: {
          name: 'review["source"]',
          type: "Person",
        },
        reviewBody: "Ambient Jazz-Funk",
      },
      {
        "@type": "Review",
        author: {
          name: 'review["source"]',
          type: "Person",
        },
        reviewBody: "Uncommonly good driving music",
        url: "https://twitter.com/catallaxer/status/572134901018959872",
      },
      {
        "@type": "Review",
        author: {
          name: 'review["source"]',
          type: "Person",
        },
        reviewBody:
          "What Herbie Hancock would sound like if he was a 3-piece band",
      },
    ],
    url: "https://rawfunkmaharishi.uk/",
  },
  startDate: "2023-12-14T21:00",
  url: "/gigs/2023/12/14/luna",
};
