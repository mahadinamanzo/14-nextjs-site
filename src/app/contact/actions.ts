"use server";

import { appendFile, mkdir } from "node:fs/promises";
import { join } from "node:path";
import type { ContactFormState, ContactFormValues } from "./types";

const budgetOptions = new Set([
  "under-500k",
  "500k-1m",
  "1m-3m",
  "3m-plus",
  "not-sure",
]);

function readString(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContactForm(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const values: ContactFormValues = {
    name: readString(formData, "name"),
    email: readString(formData, "email"),
    budget: readString(formData, "budget"),
    message: readString(formData, "message"),
  };
  const errors: ContactFormState["errors"] = {};

  if (values.name.length < 2 || values.name.length > 100) {
    errors.name = "Enter a name between 2 and 100 characters.";
  }

  if (
    values.email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
  ) {
    errors.email = "Enter a valid email address.";
  }

  if (!budgetOptions.has(values.budget)) {
    errors.budget = "Choose one of the listed budget ranges.";
  }

  if (values.message.length < 10 || values.message.length > 5000) {
    errors.message = "Enter a message between 10 and 5,000 characters.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors, values };
  }

  if (process.env.NODE_ENV !== "development") {
    return {
      ok: false,
      errors: {
        form: "Message storage is not configured in this environment yet. Please email us directly.",
      },
      values,
    };
  }

  try {
    const dataDirectory = join(process.cwd(), "data");
    await mkdir(dataDirectory, { recursive: true });
    await appendFile(
      join(dataDirectory, "contact-submissions.jsonl"),
      `${JSON.stringify({ ...values, submittedAt: new Date().toISOString() })}\n`,
      "utf8",
    );
  } catch (error) {
    console.error("Failed to save contact submission locally.", error);
    return {
      ok: false,
      errors: {
        form: "We couldn’t save your message. Please email us directly instead.",
      },
      values,
    };
  }

  return {
    ok: true,
    errors: {},
    values: { name: "", email: "", budget: "", message: "" },
  };
}
