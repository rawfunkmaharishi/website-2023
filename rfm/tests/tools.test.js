import { streamingServices, kebabCase } from "../src/lib/tools.js";

it("structures the data", () => {
  const sameAs = [
    "https://www.youtube.com/embed/videoseries?list=PL_-_2KA93U6SIE2rJJbUlIwRhpns9G_rg",
    "https://open.spotify.com/embed/album/5GoS0MKtTna4X90fStHjvh",
    "https://music.apple.com/us/album/takatsuka/1089162061",
    "https://widget.deezer.com/widget/dark/album/12532182",
    "https://music.amazon.co.uk/embed/B01CH4A5ZG/",
  ];

  const expected = [
    {
      name: "Spotify",
      id: "spotify",
      icon: "mdi-spotify",
      url: "https://open.spotify.com/embed/album/5GoS0MKtTna4X90fStHjvh",
    },
    {
      name: "Apple Music",
      icon: "mdi-apple",
      id: "apple-music",
      url: "https://music.apple.com/us/album/takatsuka/1089162061",
    },
    {
      name: "YouTube",
      icon: "mdi-youtube",
      id: "youtube",
      url: "https://www.youtube.com/embed/videoseries?list=PL_-_2KA93U6SIE2rJJbUlIwRhpns9G_rg",
    },
    {
      name: "Deezer",
      icon: "mdi-chart-bar-stacked",
      url: "https://widget.deezer.com/widget/dark/album/12532182",
      id: "deezer",
    },
    {
      name: "Amazon Music",
      icon: "mdi-music",
      id: "amazon-music",
      url: "https://music.amazon.co.uk/embed/B01CH4A5ZG/",
    },
  ];

  expect(streamingServices(sameAs)).toEqual(expected);
});

it("kebabs a name", () => {
  expect(kebabCase("name")).toEqual("name");
  expect(kebabCase("two names")).toEqual("two-names");
  expect(kebabCase("Capital Name")).toEqual("capital-name");
});
