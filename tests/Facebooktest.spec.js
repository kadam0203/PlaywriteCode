const { test, expect } = require('@playwright/test');
 
 
 
 
test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage

   const products = page.locator(".card-body");
   await page.goto("https://www.google.com/");
  


});