import { test, expect } from '@playwright/test';

test("Fill Information & Register", async ({ page }) => {
    await test.step("Navigate to Register Page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.click("//a[@href='01-xpath-register-page.html']");
    });
    await test.step("Fill Username", async () => {
        await page.fill("//input[@id='username']", "Chang");
        await page.locator("//input[@id='email']").fill("tranghoang6116@gmail.com");
        await page.locator("//input[@id='female']").check();
        await page.locator("//input[@id='traveling']").setChecked(true);
        await page.locator("//select[@id='country']").selectOption("australia");
        await page.locator("//input[@id='dob']").fill("1993-08-26");
        await page.locator("//input[@id='profile']").setInputFiles("lesson-5/image-1.png");
        await page.locator("//textarea[@id='bio']").fill("Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        await page.locator("//input[@id='rating']").fill("8");
        await page.locator("//input[@id='favcolor']").fill("#000000");
        await page.locator("//input[@id='newsletter']").setChecked(true);
        await page.locator("//span[@class='slider round']").setChecked(true);
        await page.locator("//div[@id='starRating']").click({ position: { x: 94, y: 10 } });
        /// await page.locator("//input[@id='customDate']").fill("2025-07-31");
        await page.locator("//button[@type='submit']").click();
    });
});