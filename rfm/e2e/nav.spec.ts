import { test, expect } from "@playwright/test";

const expectations = [
  { page: "Band", url: /the-band/ },
  { page: "Gigs", url: /gigs/ },
  { page: "Records", url: /records/ },
  { page: "Videos", url: /videos/ },
];

expectations.forEach(function (expectation) {
  test("`" + expectation.page + "` link", async ({ page }) => {
    await page.goto("/");
    await page.getByText(expectation.page).click();
    await expect(page).toHaveURL(expectation.url);
    await expect(
      page.getByRole("link", { name: expectation.page })
    ).toHaveAttribute("aria-current", "page");
  });
});
