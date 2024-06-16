const {test} = require('@playwright/test');
const {expect} = require('@playwright/test');



test('endtoend', async function({browser}) 
{


const context = await browser.newContext();
const page = await context.newPage();
const product = page.locator(".card-body");
const proname = 'ADIDAS ORIGINAL';
page.goto('https://rahulshettyacademy.com/client');
await page.locator('#userEmail').fill("rt@mail.com");
await page.locator("#userPassword").fill("Harshit@123");
await page.locator("[type='submit']").click();
await page.waitForLoadState('networkidle');
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles);
   const count1 = await product.count();
   for(let i=0 ; i<count1; ++i)

    {

    
        if(await product.nth(i).locator("b").textContent() === proname)
    
            {
                await product.nth(i).locator("text= Add To Cart").click();
                break;

            }
    
        }
    await page.locator("[routerlink*='dashboard/cart']").click()
    
    page.locator(".cart").waitFor();
    
    const bool =  await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();

    expect(bool).toBeTruthy();

    console.log(bool);
  await page.locator("[type='button']").nth(1).click();
 await page.locator("div>div>div>input[class= 'input txt']").first().fill("312");
 await page.locator("div>div>div>input[class= 'input txt']").nth(1).fill("Harshit Thakur");
 await page.locator("[placeholder*='Country']").pressSequentially("ind");
 
 const dropdown = await page.locator(".ta-results");
 await dropdown.waitFor();
 const count2 = await dropdown.locator("button").count();

for(let i=0; i<count2; ++i)
    {
const country = await dropdown.locator("button").nth(i).textContent();

if(country === ' India')
    {
        await dropdown.locator("button").nth(i).click();
        break;
    }


    }

    await page.locator(".btnn").click();

})
