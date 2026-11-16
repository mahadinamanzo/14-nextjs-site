const vercelProductionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (vercelProductionUrl
    ? `https://${vercelProductionUrl}`
    : "https://mahadinamanzo.com");

export const siteUrl = new URL(configuredSiteUrl).origin;
