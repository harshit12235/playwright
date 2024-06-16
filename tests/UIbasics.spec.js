    const {test, expect} = require('@playwright/test');

    test('First testcase', async function({browser})
    {
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://google.com");
const title = await page.title();
console.log(title);
await expect(page).toHaveTitle("Google")
await page.locator('textarea#APjFqb').fill("Dog");
await page.locator('input.gNO89b').click
const title1 = await page.title();
console.log(title1);
});
