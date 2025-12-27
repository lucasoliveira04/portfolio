export const LANGUAGE_CONFIG = {
  pt: {
    labelKey: "header.change_language.pt",
    flag: "pt",
    gradient: "from-green-500 to-yellow-400",
  },
  en: {
    labelKey: "header.change_language.en",
    flag: "en",
    gradient: "from-blue-500 to-red-500",
  },
  es: {
    labelKey: "header.change_language.es",
    flag: "es",
    gradient: "from-red-500 to-yellow-500",
  },
} as const;

export type LanguageCode = keyof typeof LANGUAGE_CONFIG;