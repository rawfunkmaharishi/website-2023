import { test, expect } from "@playwright/test";

const expectations = [
  { url: "/", title: "Raw Funk Maharishi" },
  { url: "/the-band", title: "The Band" },
  { url: "/gigs/1", title: "Upcoming Gigs" },
  { url: "/gigs/2023/06/08/luna", title: "Live at Luna Lounge" },
  { url: "/records", title: "Records" },
  { url: "/records/re:designed", title: "Re:Designed" },
  { url: "/videos/1", title: "Videos" },
];

expectations.forEach(function (expectation) {
  test(expectation.url + " has correct title", async ({ page }) => {
    await page.goto("http://localhost:3002" + expectation.url);
    await expect(page).toHaveTitle(expectation.title);
  });
});
