const{test} = require('@playwright/test');
const { expect } = require('@playwright/test');

test('Third test', async function({browser}) {

const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
await page.locator("select.form-control").selectOption("consult"); ///method to select value from dropdown
await page.locator(".checkmark").nth(1).click();
console.log(await page.locator(".checkmark").nth(1).isChecked());
await expect (page.locator(".checkmark").nth(1)).toBeChecked(); // assertion to check if value is checked 
await page.locator("#okayBtn").click();

const[newPage] = await Promise.all([
context.waitForEvent('Page'),
    await page.locator("[href*='documents-request']").click()]

)
})
