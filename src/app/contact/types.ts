export type ContactFormValues = {
  name: string;
  email: string;
  budget: string;
  message: string;
};

export type ContactFormState = {
  ok: boolean;
  errors: Partial<
    Record<"name" | "email" | "budget" | "message" | "form", string>
  >;
  values: ContactFormValues;
};
