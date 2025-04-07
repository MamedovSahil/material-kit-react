import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ru from './ru.json';
import en from './en.json';
const language = 'ru'; // localStorage.getItem("dashboardLang") || "ru";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
  },
  lng: language,
  fallbackLng: 'en',
  debug: false,
});
