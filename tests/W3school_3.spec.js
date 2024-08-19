const { test, expect ,defineConfig } = require('@playwright/test');



 module.exports = defineConfig({
    retries:2
 })

 test('test 11: javascript Test ',async ({page})=> {
       test.setTimeout(12000);
       await page.goto("https://www.w3schools.com/javascript/");
  
       await expect(page).toHaveURL(/.javascript/);
 })


test('test 12:  Test ',async ({page})=> {
     await page.goto("https://www.w3schools.com/java/");

     await expect(page).toHaveURL(/.java/)
 })



