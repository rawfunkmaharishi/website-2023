import { test, expect } from "@playwright/test";

const expectations = [
  { url: "/", data: { "@type": "MusicGroup", name: "Raw Funk Maharishi" } },
  {
    url: "/the-band",
    data: { "@type": "MusicGroup", name: "Raw Funk Maharishi" },
  },
  {
    url: "/gigs",
    data: { "@type": "MusicGroup", name: "Raw Funk Maharishi" },
  },
  {
    url: "/gigs/2022/12/15/luna",
    data: {
      "@type": "MusicEvent",
      name: "Raw Funk Maharishi live at Luna Lounge",
    },
  },
  {
    url: "/records",
    data: { "@type": "MusicGroup", name: "Raw Funk Maharishi" },
  },
  {
    url: "/records/re:designed",
    data: { "@type": "MusicAlbum", name: "Re:Designed" },
  },
  {
    url: "/videos",
    data: { "@type": "MusicGroup", name: "Raw Funk Maharishi" },
  },
  {
    url: "/videos/2023/01/12/luna",
    data: {
      "@type": "MusicEvent",
      name: "Raw Funk Maharishi live at Luna Lounge",
    },
  },
];

expectations.forEach(function (expectation) {
  test(expectation.url + " has correct JSON-LD", async ({ page }) => {
    await page.goto(expectation.url);
    const content = await page
      .locator("xpath=//script[@type='application/ld+json']")
      .textContent();

    const json = JSON.parse(content);

    Object.keys(expectation.data).forEach(function (key) {
      expect(json[key]).toEqual(expectation.data[key]);
    });
  });
});
