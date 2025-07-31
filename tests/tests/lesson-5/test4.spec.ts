import { test, expect } from '@playwright/test';

test("Add Note", async ({ page }) => {
    await test.step("Navigate to Page", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.click("//a[@href='04-xpath-personal-notes.html']");
    });
    await test.step("Add 10 notes", async () => {
        await page.fill("//input[@id='note-title']", "Nơi hình thành động đất dữ dội nhất thế giới");
        await page.fill("//textarea[@id='note-content']", "Vành đai lửa Thái Bình Dương là dải núi lửa hình móng ngựa nổi tiếng với các vụ phun trào mạnh mẽ và động đất cường độ mạnh.");
        await page.locator("//button[@id='add-note']").click();
        await page.fill("//input[@id='note-title']", "Một số CEO hào hứng thay thế nhân viên bằng AI");
        await page.fill("//textarea[@id='note-content']", "Elijah Clark, chuyên gia tư vấn về triển khai AI, cho biết một số CEO ưu tiên AI vì làm việc hiệu quả, không đình công, không đòi tăng lương.");
        await page.locator("//button[@id='add-note']").click();
        await page.fill("//input[@id='note-title']", "Xu hướng nhà máy trong bóng tối tại Trung Quốc");
        await page.fill("//textarea[@id='note-content']", "Năm 2023, Xiaomi công bố tổ hợp sản xuất 81.000 mét vuông, tương đương 11 sân bóng đá, hoạt động 24/7, không một bóng người, không đèn, không nghỉ và không thay ca.");
        await page.locator("//button[@id='add-note']").click();
        await page.fill("//input[@id='note-title']", "Làn sóng 996 của Trung Quốc ập đến Thung lũng Silicon");
        await page.fill("//textarea[@id='note-content']", "rong cuộc đua phát triển AI, ngày càng nhiều startup Mỹ theo đuổi mô hình làm việc 996 - chế độ khắc nghiệt và gây tranh cãi bắt nguồn từ Trung Quốc");
        await page.locator("//button[@id='add-note']").click();
        await page.fill("//input[@id='note-title']", "Cơn địa chấn bên trong Apple");
        await page.fill("//textarea[@id='note-content']", "Apple được đánh giá đang gặp nhiều thách thức trong cuộc đua AI khi vừa chậm phát triển mô hình riêng, vừa chảy máu chất xám nghiêm trọng.");
        await page.locator("//button[@id='add-note']").click();
        await page.fill("//input[@id='note-title']", "Tội phạm mua bán người gia tăng, công an chỉ cách tránh bẫy");
        await page.fill("//textarea[@id='note-content']", "Trong bối cảnh bất kỳ ai thiếu cảnh giác cũng có thể trở thành nạn nhân của tội phạm mua bán người, công an đã chỉ ra cách nhận diện, phòng tránh.");
        await page.locator("//button[@id='add-note']").click();
        await page.fill("//input[@id='note-title']", "Một số CEO hào hứng thay thế nhân viên bằng AI");
        await page.fill("//textarea[@id='note-content']", "Elijah Clark, chuyên gia tư vấn về triển khai AI, cho biết một số CEO ưu tiên AI vì làm việc hiệu quả, không đình công, không đòi tăng lương.");
        await page.locator("//button[@id='add-note']").click();
        await page.fill("//input[@id='note-title']", "Xu hướng nhà máy trong bóng tối tại Trung Quốc");
        await page.fill("//textarea[@id='note-content']", "Năm 2023, Xiaomi công bố tổ hợp sản xuất 81.000 mét vuông, tương đương 11 sân bóng đá, hoạt động 24/7, không một bóng người, không đèn, không nghỉ và không thay ca.");
        await page.locator("//button[@id='add-note']").click();
        await page.fill("//input[@id='note-title']", "Làn sóng 996 của Trung Quốc ập đến Thung lũng Silicon");
        await page.fill("//textarea[@id='note-content']", "rong cuộc đua phát triển AI, ngày càng nhiều startup Mỹ theo đuổi mô hình làm việc 996 - chế độ khắc nghiệt và gây tranh cãi bắt nguồn từ Trung Quốc");
        await page.locator("//button[@id='add-note']").click();
        await page.fill("//input[@id='note-title']", "Cơn địa chấn bên trong Apple");
        await page.fill("//textarea[@id='note-content']", "Apple được đánh giá đang gặp nhiều thách thức trong cuộc đua AI khi vừa chậm phát triển mô hình riêng, vừa chảy máu chất xám nghiêm trọng.");
        await page.locator("//button[@id='add-note']").click();
    });
    await test.step("Input & Search", async () => {
        await page.fill("//input[@id='search']", "Làn sóng 996 của Trung Quốc ập đến Thung lũng Silicon");
        await page.press("//input[@id='search']", "Enter");
    });
});
