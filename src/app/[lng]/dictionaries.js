const dictionaries = {
  en: () => import("../../dictionary/en.json").then((module) => module.default),
  ro: () => import("../../dictionary/ro.json").then((module) => module.default),
  ru: () => import("../../dictionary/ru.json").then((module) => module.default),
};

export const getDictionary = async (locale) => dictionaries[locale]();