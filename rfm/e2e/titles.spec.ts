import { test, expect } from "@playwright/test";

const expectations = [
  { url: "/", title: "Raw Funk Maharishi" },
  { url: "/the-band", title: "The Band" },
  { url: "/gigs", title: "Upcoming Gigs" },
  {
    url: "/gigs/2023/06/08/luna",
    title: "Raw Funk Maharishi live at Luna Lounge on Thursday June 8th",
  },
  { url: "/records", title: "Records" },
  { url: "/records/re:designed", title: "Re:Designed by Raw Funk Maharishi" },
  { url: "/videos", title: "Videos" },
];

expectations.forEach(function (expectation) {
  test(expectation.url + " has correct title", async ({ page }) => {
    await page.goto(expectation.url);
    await expect(page).toHaveTitle(expectation.title);
  });
});

test("It has the correct title *and* shortTitle", async ({ page }) => {
  await page.goto("/gigs/2023/06/08/luna");
  await expect(page).toHaveTitle(
    "Raw Funk Maharishi live at Luna Lounge on Thursday June 8th"
  );
  expect(await page.locator("h1").textContent()).toBe("Live at Luna Lounge");
});
