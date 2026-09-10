"use server";

import { Resend } from "resend";
import { ContactFormSchema } from "@/lib/schemas";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendInquiryAction(formData: unknown) {
  const result = ContactFormSchema.safeParse(formData);

  if (!result.success) {
    return { success: false, errors: result.error };
  }

  const { name, email, message } = result.data;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "samfinance2002@gmail.com",
      subject: "New Bloom Studio Inquiry",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to send" };
  }
}
