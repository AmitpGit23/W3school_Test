// @ts-check
const { test, expect, defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 100000, retries:2
})

test('Test case 1: Page title contains w3shcool', async ({ page }) => {
    await page.goto('https://www.w3schools.com/');
  await expect(page).toHaveTitle(/w3Schools/i);
});

test('Test case 2: Verify the "Learn HTML" button is visible and clickable', async ({ page }) => {
  await page.goto('https://www.w3schools.com');
  const learnHtmlButton = page.locator('a.w3-button.ga-fp.tut-button:has-text("Learn HTML")'); // Targets the button with class
  await expect(learnHtmlButton).toBeVisible();
  await learnHtmlButton.click();
  await expect(page).toHaveURL(/html/);
});

test("test case 3:serch box", async({page})=> {
  await page.goto("https://www.w3schools.com/");
 
  await expect(page.getByLabel("Search")).toBeTruthy()

});

test("test case 4 :sign up", async({page})=> {
  await page.goto("https://www.w3schools.com/");
  await page.locator('a.user-anonymous.tnb-signup-btn').click();
 
  await expect(page.getByRole('link',{name : "ratail", exact:true})).toBeTruthy()

});

// test('test case 5 :should have "Follow Us" section in the footer', async ({ page }) => {
//   await page.goto("https://www.w3schools.com/",{ timeout: 10000 });
//   const followUsSection = page.locator('footer a[href*="facebook"]');
//   await expect(followUsSection).toBeVisible({ timeout: 5000 });
// });

// test('cloud that', async ({page}) => {
//   await page.goto("https://www.w3schools.com/",{timeout: 100000});
//   await page.getByAltText('w3schools logo').click();
// });


//  test('Test case: Verify the "Get Certified" link is clickable and redirects correctly', async ({ page }) => {
//    await page.goto('https://www.w3schools.com');
//    const getCertifiedLink = page.locator('a[role="button"]:has-text("Get Certified")'); // Replace with the actual role if applicable
//    await expect(getCertifiedLink).toBeVisible();
//    await getCertifiedLink.click();
//    await expect(page).toHaveURL(/certification/);
   
// });


