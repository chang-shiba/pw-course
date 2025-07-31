import { test, expect } from '@playwright/test';

test("Add to cart", async ({ page }) => {
    await test.step("Navigate to Register Page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.click("//a[@href='02-xpath-product-page.html']");
    });

    await test.step("Product 1", async () => {
        await page.locator("//button[@data-product-id='1']").click({
            clickCount: 2
        })
    });

    await test.step("Product 2", async () => {
        await page.locator("//button[@data-product-id='2']").click({
            clickCount: 3
        });
    });

    await test.step("Product 3", async () => {
        await page.locator("//button[@data-product-id='3']").click();
    });
    });
