import Vue from 'vue';
import VueI18n from 'vue-i18n';
import { getLanguage } from '@/utils/cookies';

import elementEnLocale from 'element-ui/lib/locale/lang/en';
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN';
import elementEsLocale from 'element-ui/lib/locale/lang/es';
import elementJaLocale from 'element-ui/lib/locale/lang/ja';


// User defined lang
import enLocale from './en';
import zhLocale from './zh';
import esLocale from './es';
import jaLocale from './ja';

Vue.use(VueI18n);

const messages: any = {
  en: {
    ...enLocale,
    ...elementEnLocale,
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale,
  },
  es: {
    ...esLocale,
    ...elementEsLocale,
  },
  ja: {
    ...jaLocale,
    ...elementJaLocale,
  },
};

export const getLocale = () => {
  const cookieLanguage: string | undefined = getLanguage();
  const language: string = navigator.language.toLowerCase();
  const locales: string[] = Object.keys(messages);
  for (const locale of locales) {
    if (language.indexOf(locale) > -1) {
      return locale;
    }
  }
  // Default language is english
  return 'en';
};

const i18n = new VueI18n({
  locale: getLocale(),
  messages,
});

export default i18n;


