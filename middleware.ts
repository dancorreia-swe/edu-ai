import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "./config";

export default createMiddleware({
  defaultLocale: "en",
  localePrefix,
  locales,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt-br|en)/:path*"],
};
