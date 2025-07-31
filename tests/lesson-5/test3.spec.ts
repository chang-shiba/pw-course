import { test, expect } from '@playwright/test';

test("Add Todo", async ({ page }) => {
    await test.step("Navigate to Page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.click("//a[@href='03-xpath-todo-list.html']");
    });
    await test.step("Add 100 todo items", async () => {
        const input = page.locator("//input[@id='new-task']");
        for (let i = 1; i <= 100; i++) {
            await input.fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    });
    await test.step("Remove Odd task", async () => {
        for (let i = 1; i <= 100; i % 2 === 1) {
            page.on('dialog', async dialog => dialog.accept())
            await page.click("//button[@onclick='deleteTask(${i})']");
        }
    });
});