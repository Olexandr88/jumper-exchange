import type language from '../i18n/translations/en/language.json';
import type translation from '../i18n/translations/en/translation.json';

interface Resources {
  language: typeof language;
  translation: typeof translation;
}

export default Resources;
