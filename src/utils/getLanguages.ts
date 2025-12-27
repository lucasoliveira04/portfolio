import { LANGUAGE_CONFIG, type LanguageCode } from "../config/languages";

type Flags = Record<LanguageCode, string>;

export const getLanguages = (flags: Flags) =>
  (Object.keys(LANGUAGE_CONFIG) as LanguageCode[]).map((code) => ({
    code,
    flag: flags[code],
    labelKey: LANGUAGE_CONFIG[code].labelKey,
    gradient: LANGUAGE_CONFIG[code].gradient,
  }));