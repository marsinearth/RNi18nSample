import i18n from 'i18next';
import LocizeBackend from 'i18next-locize-backend';
import i18nextReactNative from 'i18next-react-native-language-detector';
import { reactI18nextModule } from 'react-i18next';

i18n
.use(LocizeBackend)
.use(i18nextReactNative)
.use(reactI18nextModule)
.init({
  fallbackLng: 'en',
  load: 'languageOnly',
  whitelist: ['en', 'de', 'ko'],
  ns: ['common'],
  defaultNS: 'common',

  debug: false,
  saveMissing: true,

  interpolation: {
    escapeValue: false, // not needed for react as it does escape per default to prevent xss!
  },

  backend: {
    referenceLng: 'en',
    apiKey: 'b1791d47-3b93-4b6b-ad66-a9d249ec7b45',
    projectId: 'fda8ac8e-2e52-47dd-a6b9-896cf479a703'
  }
});

export default i18n;