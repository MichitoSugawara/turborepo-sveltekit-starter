import { i18n } from '@self/i18n';
import { z } from 'zod';
import { makeZodI18nMap } from 'zod-i18n-map';

i18n.changeLanguage('ja');
z.setErrorMap(makeZodI18nMap({ t: i18n.t, ns: 'zod' }));

export const _z = z;
