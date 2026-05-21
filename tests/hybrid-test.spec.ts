import { test, expect } from "@playwright/test";
import { AdminPage } from "../pages/AdminPage";
import { APIHelper } from "../utils/apiHelper";

test.describe("Hybrid E2E Test: API + UI Intergration", () => {
  test("Should verify message in Admin UI after sending via API", async ({
    page,
    request,
  }) => {
    const subject = `Test Booking Issue ${Date.now()}`;

    console.log("Sending message via API...");
    await APIHelper.createMessage(
      request,
      "John Doe",
      "john123@email.com",
      947512345678,
      subject,
      "I need to book a room for 2 nights. Please confirm",
    );

    const adminPage = new AdminPage(page);
    console.log("Logging into admin panel via UI...");
    await adminPage.login("admin", "password");

    await adminPage.openMessages();

    const messageHeader = page.getByText(subject);
    await expect(messageHeader).toBeVisible();

    console.log("Test Passed: Message found in Admin UI");
  });
});
