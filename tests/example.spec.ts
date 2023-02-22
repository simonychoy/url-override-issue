import { test, expect } from "@playwright/test";

const simpleHtmlDataUrl = `data:text/html,<html><script type="application/javascript">URL = 'this is a string value and not a URL';</script><body><h1>Test page</h1></body></html>`;

test("Evaluate script on page where URL is overridden", async ({ page }) => {
  await page.goto(simpleHtmlDataUrl);

  const data = { text: "some data", value: 1 };

  const result = await page.evaluate((data) => {
    const { text } = data;
    return { myTextData: text };
  }, data);
  expect(result).toBe({ myTextData: "some data" });
});
