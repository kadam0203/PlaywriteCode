const { test, expect } = require('@playwright/test');
 
 
 
 
test('@Facebook App login', async ({ page }) => {
   // Navigate to Google
   await page.goto("https://www.google.com/");

   // Accept cookies if the dialog appears (optional, depends on region)
   const acceptBtn = page.locator('button:has-text("Accept all")');
   if (await acceptBtn.isVisible()) {
      await acceptBtn.click();
   }

   // Type 'facebook' in the search box and submit
   await page.locator('input[name="q"]').fill('facebook');
   await page.locator('input[name="q"]').press('Enter');

   // Wait for results and verify the Facebook link
   const fbLink = page.locator('h3:has-text("Facebook - log in or sign up")');
   await expect(fbLink).toBeVisible();
   await fbLink.click();

   // Wait for Facebook page to load and click 'Create new account'
   const createAccountBtn = page.locator('text=Create new account');
   await createAccountBtn.first().click();
   // Optionally, add more steps to fill the sign-up form
});