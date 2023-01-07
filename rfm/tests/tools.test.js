import { streamingServices } from "../src/lib/tools.js";

it("structures the data", () => {
  const sameAs = [
    "https://www.youtube.com/embed/videoseries?list=PL_-_2KA93U6SIE2rJJbUlIwRhpns9G_rg",
    "https://open.spotify.com/embed/album/5GoS0MKtTna4X90fStHjvh",
    "https://music.apple.com/us/album/takatsuka/1089162061",
    "https://www.amazon.co.uk/gp/product/B01CH4A5ZG",
  ];

  const expected = {
    YouTubeURL:
      "https://www.youtube.com/embed/videoseries?list=PL_-_2KA93U6SIE2rJJbUlIwRhpns9G_rg",
    SpotifyURL: "https://open.spotify.com/embed/album/5GoS0MKtTna4X90fStHjvh",
    AppleURL: "https://music.apple.com/us/album/takatsuka/1089162061",
    otherServices: [
      {
        name: "Amazon Music",
        icon: "mdi-music",
        url: "https://www.amazon.co.uk/gp/product/B01CH4A5ZG",
      },
    ],
  };

  expect(streamingServices(sameAs)).toEqual(expected);
});
