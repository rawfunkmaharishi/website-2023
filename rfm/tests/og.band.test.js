import { ogFromJSON } from "../src/lib/OpenGraph";

it("gets the data", () => {
  const og = new ogFromJSON(data, "https://somesite.com");

  expect(og.render()).toEqual(String.raw`
  <meta property="og:description" content="Raw Funk Maharishi" />
  <meta property="og:image" content="https://somesite.com/logos/rfm.png" />
  <meta property="og:title" content="Raw Funk Maharishi" />
  <meta property="og:type" content="profile" />
  <meta property="og:url" content="https://rawfunkmaharishi.uk/" />
`);
});

const data = {
  "@context": "https://schema.org",
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
        name: "Singer/keyboard player from DWT",
        type: "Person",
      },
      reviewBody: "You remind me of Steely Dan without the vocals",
      url: "https://twitter.com/dwt_music",
    },
    {
      "@type": "Review",
      author: {
        name: "Kitty",
        type: "Person",
      },
      reviewBody: "Ambient Jazz-Funk",
    },
    {
      "@type": "Review",
      author: {
        name: "@catallaxer on Twitter",
        type: "Person",
      },
      reviewBody: "Uncommonly good driving music",
      url: "https://twitter.com/catallaxer/status/572134901018959872",
    },
    {
      "@type": "Review",
      author: {
        name: "Guitarist from the Dead Frets",
        type: "Person",
      },
      reviewBody:
        "What Herbie Hancock would sound like if he was a 3-piece band",
    },
  ],
  url: "https://rawfunkmaharishi.uk/",
};
