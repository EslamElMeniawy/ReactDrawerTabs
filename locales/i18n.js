import ReactNative from 'react-native';
import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import { getData, LANGUAGE_KEY } from '../src/utils/AsyncStorageUtils';

// Import all locales.
import en from './en.json';
import ar from './ar.json';

export const defaultLocale = 'en';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

// If an English translation is not available in en.js, it will look inside ar.js
I18n.fallbacks = true;

// It will convert HOME_noteTitle to "HOME note title"
// if the value of HOME_noteTitle doesn't exist in any of the translation files.
I18n.missingBehaviour = 'guess';

// If the current locale in device is not en or ar.
I18n.defaultLocale = defaultLocale;

// Set the locale.
I18n.locale = defaultLocale;

// Define the supported translations.
I18n.translations = {
  en,
  ar,
};

// Get user language.
// Set the user language if available.
getData(LANGUAGE_KEY).then((userLanguage) => {
  if (userLanguage) {
    I18n.locale = userLanguage;
  }
});

export const setLocale = (locale) => {
  I18n.locale = locale;
};

// It will be used to define initial language state in reducer.
export const getCurrentLocale = () => I18n.locale;

// Is it a RTL language?
export const isRTL = getCurrentLocale().indexOf('ar') === 0;

// Allow RTL alignment in RTL languages.
ReactNative.I18nManager.allowRTL(isRTL);

// The method we'll use instead of a regular string.
export function strings(name, params = {}) {
  return I18n.t(name, params);
}

export default I18n;
