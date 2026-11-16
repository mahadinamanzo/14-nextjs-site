"use client";

import { useActionState } from "react";
import { submitContactForm } from "./actions";
import type { ContactFormState } from "./types";

const initialState: ContactFormState = {
  ok: false,
  errors: {},
  values: { name: "", email: "", budget: "", message: "" },
};

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-emerald-800 focus:ring-2 focus:ring-emerald-800/15";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  return (
    <div className="rounded-[2rem] border border-ink/10 bg-white/70 p-6 sm:p-9">
      <h2 className="text-xl font-semibold tracking-tight">Tell us a little more</h2>
      <p className="mt-2 text-sm leading-6 text-ink/60">
        Share a few details and we&apos;ll be in touch.
      </p>

      {state.ok ? (
        <p
          className="mt-6 rounded-xl bg-[#e8eee5] px-4 py-3 text-sm leading-6 text-emerald-950"
          role="status"
          aria-live="polite"
        >
          Thanks for reaching out. Your message has been saved, and we&apos;ll
          be in touch soon.
        </p>
      ) : null}

      {state.errors.form ? (
        <p
          className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm leading-6 text-red-800"
          id="form-error"
          role="alert"
        >
          {state.errors.form}
        </p>
      ) : null}

      <form
        key={JSON.stringify(state.values)}
        action={formAction}
        className="mt-7 space-y-5"
      >
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium">
            Your name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            defaultValue={state.values.name}
            aria-invalid={Boolean(state.errors.name)}
            aria-describedby={state.errors.name ? "name-error" : "name-hint"}
            className={fieldClassName}
          />
          <p id="name-hint" className="sr-only">
            Enter your name, between 2 and 100 characters.
          </p>
          {state.errors.name ? (
            <p id="name-error" className="mt-2 text-sm text-red-700">
              {state.errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-medium">
            Email address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
            defaultValue={state.values.email}
            aria-invalid={Boolean(state.errors.email)}
            aria-describedby={state.errors.email ? "email-error" : "email-hint"}
            className={fieldClassName}
          />
          <p id="email-hint" className="sr-only">
            We&apos;ll use this address to get back to you.
          </p>
          {state.errors.email ? (
            <p id="email-error" className="mt-2 text-sm text-red-700">
              {state.errors.email}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-budget" className="text-sm font-medium">
            Estimated budget
          </label>
          <select
            id="contact-budget"
            name="budget"
            required
            defaultValue={state.values.budget}
            aria-invalid={Boolean(state.errors.budget)}
            aria-describedby={
              state.errors.budget ? "budget-error" : "budget-hint"
            }
            className={fieldClassName}
          >
            <option value="" disabled>
              Select a range
            </option>
            <option value="under-500k">Under ₦500,000</option>
            <option value="500k-1m">₦500,000 – ₦1,000,000</option>
            <option value="1m-3m">₦1,000,000 – ₦3,000,000</option>
            <option value="3m-plus">₦3,000,000+</option>
            <option value="not-sure">Not sure yet</option>
          </select>
          <p id="budget-hint" className="sr-only">
            Choose the budget range that best fits your project.
          </p>
          {state.errors.budget ? (
            <p id="budget-error" className="mt-2 text-sm text-red-700">
              {state.errors.budget}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-message" className="text-sm font-medium">
            A little about your project
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            minLength={10}
            maxLength={5000}
            defaultValue={state.values.message}
            aria-invalid={Boolean(state.errors.message)}
            aria-describedby={
              state.errors.message ? "message-error" : "message-hint"
            }
            className={`${fieldClassName} resize-y`}
          />
          <p id="message-hint" className="sr-only">
            Write between 10 and 5,000 characters about your project.
          </p>
          {state.errors.message ? (
            <p id="message-error" className="mt-2 text-sm text-red-700">
              {state.errors.message}
            </p>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-lime px-6 text-sm font-semibold text-ink transition-colors hover:bg-[#c5eb52] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Sending…" : "Send message"}
          {!isPending ? <span aria-hidden="true">↗</span> : null}
        </button>
      </form>
    </div>
  );
}
