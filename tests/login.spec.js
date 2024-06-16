const { test } = require('@playwright/test');

test('second testcase', async function ({ browser }) {
    const context = await browser.newContext();
    const page = await context.newPage();
    
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator('#userEmail').fill("rt@mail.com");
    await page.locator("#userPassword").fill("Harshit@123");
    await page.locator("[type='submit']").click();
    await page.waitForLoadState("networkidle");
    const itemlist = await page.locator(" .card-body b").allTextContents();
    console.log(itemlist);


});
