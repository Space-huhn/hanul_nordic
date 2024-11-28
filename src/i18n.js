import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';
import { i18n } from "i18n-config";
const { locales } = i18n;

export default getRequestConfig(async ({locale}) => {
  if (!locales.includes(locale)) notFound();
  return {
    messages: (await import(`./dictionary/${locale}.json`)).default
  };
});