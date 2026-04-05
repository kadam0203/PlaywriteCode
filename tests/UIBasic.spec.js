const {test, expect} = require('@playwright/test');


test ('Broweser context Playwrite test',async ({ browser }) =>
{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
});

test ('Page Playwrite test',async ({ page }) =>
{
const username=page.locator("#username");
const password=page.locator("#password");
const cardTitle=page.locator(".card-body a");
const loginbtn=page.locator("[type='submit']");
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const title=await page.title();
console.log(await page.title());
await username.fill("rahulshettyacademy");
await password.fill("Learning@830$3mK2");
await loginbtn.click();
// console.log(await page.locator("[style*='block']").textContent());
// await expect(page.locator("[style*='block']")).toContainText("Incorrect");
// console.log(await cardTitle.nth(0).textContent());
// await page.waitForLoadState('networkidle');
await cardTitle.first().waitFor();
const alltitles=await cardTitle.allTextContents();
console.log(alltitles);
});

test('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
//  await page.pause();
 })