import {
  streamingServices,
  kebabCase,
  isActive,
  cleanUrl,
  trimSlashes,
} from "../src/lib/tools.js";

import { data as paletteData } from "../src/conf/palettes/820263-d90368-eadeda-2e294e-ffd400";

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
  ];

  expect(streamingServices(sameAs)).toEqual(expected);
});

it("kebabs a name", () => {
  expect(kebabCase("name")).toEqual("name");
  expect(kebabCase("two names")).toEqual("two-names");
  expect(kebabCase("Capital Name")).toEqual("capital-name");
});

it("knows if a link is active", () => {
  expect(isActive("/the-band", "/the-band")).toEqual(true);
  expect(isActive("/records", "/the-band")).toEqual(false);
  expect(isActive("/gigs/1", "/gigs/2")).toEqual(true);
});

it("makes a clean URL", () => {
  expect(cleanUrl("https://foo.com/bar")).toEqual("https://foo.com/bar");
  expect(cleanUrl("https://foo.com", "bar")).toEqual("https://foo.com/bar");
  expect(cleanUrl("https://foo.com", "/bar")).toEqual("https://foo.com/bar");
  expect(cleanUrl("https://foo.com/", "/bar/")).toEqual("https://foo.com/bar");
});

it("trims slashes", () => {
  expect(trimSlashes("foo")).toEqual("foo");
  expect(trimSlashes("/foo")).toEqual("foo");
  expect(trimSlashes("/foo/bar//")).toEqual("foo/bar");
});

