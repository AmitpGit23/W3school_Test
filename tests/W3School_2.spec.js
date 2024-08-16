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

test('test 8 -"Try it Yourself" button and check iframe content', async ({ page }) => {

    await page.goto("https://www.w3schools.com/html/",{timeout: 70000});
    // Click the "Try it Yourself" button
    await page.locator('a[title="Try it Yourself"]').click({timeout: 70000});

    const iframe = page.frameLocator('iframe[id="iframeResult"]');
    
    // Verify that the iframe contains expected content
    // Example: Check if it contains the HTML tag in the preview
    const htmlTag = iframe.locator('html');
    await expect(htmlTag).toBeVisible();

   
  });