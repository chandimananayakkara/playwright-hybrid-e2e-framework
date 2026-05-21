import { APIRequestContext, expect } from "@playwright/test";

export class APIHelper {
  static async createMessage(
    request: APIRequestContext,
    name: string,
    email: string,
    phone: number,
    subject: string,
    description: string,
  ) {
    const response = await request.post(
      "https://automationintesting.online/api/message",
      {
        data: {
          name: name,
          email: email,
          phone: phone,
          subject: subject,
          description: description,
        },
      },
    );

    expect(response.status()).toBe(200);
  }
}
