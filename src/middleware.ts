import createMiddleware from 'next-intl/middleware';
import { i18n } from "@/i18n-config";
const { locales, defaultLocale } = i18n;

export default createMiddleware({
  locales: locales,
  defaultLocale: defaultLocale
});

export const config = {
  matcher: ['/', '/(ro|ru|en)/:path*']
};