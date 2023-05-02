import { i18n } from '../src/index';
test('Language can be changed to Japanese', () => {
  i18n.changeLanguage('ja');
  expect(i18n.language).toBe('ja');
});

test('Language can be changed to English', () => {
  i18n.changeLanguage('en');
  expect(i18n.language).toBe('en');
});
