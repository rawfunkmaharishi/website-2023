import { ogFromJSON } from "../src/lib/OpenGraph";

it("gets the data", () => {
  const og = new ogFromJSON(data, "https://somesite.com");

  expect(og.render()).toEqual(String.raw`
  <meta property="og:description" content="Re:Designed by Raw Funk Maharishi" />
  <meta property="og:image" content="https://somesite.co/record-covers/re:designed.jpg" />
  <meta property="og:title" content="Re:Designed" />
  <meta property="og:type" content="music.album" />
  <meta property="og:url" content="https://somesite.co/records/re:designed" />
`);
});

const data = {
  "@context": "https://schema.org",
  "@type": "MusicAlbum",
  albumReleaseType: "LP",
  byArtist: {
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
  },
  datePublished: "2021-06-12",
  genre: "Industrial Jazz",
  identifier: "re:designed",
  image: {
    "@type": "ImageObject",
    contentUrl: "/record-covers/re:designed.jpg",
    name: "Re:Designed cover",
  },
  locationCreated: {
    "@type": "Place",
    name: "Wax Studios",
    url: "https://waxrecordingstudio.info/",
  },
  name: "Re:Designed",
  numTracks: 8,
  sameAs: [
    "https://www.youtube.com/embed/videoseries?list=OLAK5uy_lqmFjsrXWvz75cAzWaggQKnrSwARYR-Wk",
    "https://open.spotify.com/embed/album/2ANWlymQ1BoqgGcIELcwFl",
    "https://embed.music.apple.com/us/album/re-designed-lockdown-remixes/1570279979",
  ],
  track: [
    {
      "@type": "MusicRecording",
      name: "Tokyo Used Guitar (Lockdown Remix '21)",
    },
    {
      "@type": "MusicRecording",
      name: "Hippy Jazz (Lockdown Remix '21)",
    },
    {
      "@type": "MusicRecording",
      name: "New York Stuntman (Lockdown Remix '21)",
    },
    {
      "@type": "MusicRecording",
      name: "Fabric (Lockdown Remix '21)",
    },
    {
      "@type": "MusicRecording",
      name: "Hope to Go (Lockdown Remix '21)",
    },
    {
      "@type": "MusicRecording",
      name: "Could Be (Lockdown Remix '21)",
    },
    {
      "@type": "MusicRecording",
      name: "Basic Era (Lockdown Remix '21)",
    },
    {
      "@type": "MusicRecording",
      name: "Chemosphere (Lockdown Remix '21)",
    },
  ],
  url: "/records/re:designed",
};
