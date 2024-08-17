const { test, expect, defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  timeout: 100000, retries:2
})

test('test 6: html Test ',async ({page})=> {
    await page.goto("https://www.w3schools.com/html/",{timeout: 70000});

    await expect(page).toHaveTitle(/HTML/i);
})

test('test 7 : should see "HTML Examples" section', async ({ page }) => {
    await page.goto("https://www.w3schools.com/html/",{timeout: 70000});
    const examplesSection = page.locator('a.ws-btn.ws-grey.ws-hover-black[href*="html_examples"]');
    // Targeting the link styled as a button
        await expect(examplesSection).toBeVisible({timeout:6000});
});
test('test 8: html Test ',async ({page})=> {
  await page.goto("http://127.0.0.1:5500/WishFund-%20Nonprofit%20Charity%20Funderising%20Theme.html",{timeout: 70000});

  await expect(page).toHaveTitle(/Wishfund/i);
})

// test('test 9: html Test ',async ({page})=> {
//   await page.goto("https://www.w3schools.com/html/tryit.asp?filename=tryhtml_images_alt_chania",{timeout: 100000});

//   const locator = page.getByRole('textarea',{timeout:10000});
// await expect(locator).toBeEditable({timeout:8000});
// })


test('test 10: skip this test', async ({ page, browserName }) => {
  await page.goto("https://www.w3schools.com/html");
  test.skip(browserName === 'firefox', 'Still working on it');
});
