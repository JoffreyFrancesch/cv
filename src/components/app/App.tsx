import React from 'react';
import { createIntl, createIntlCache, FormattedMessage, RawIntlProvider } from 'react-intl';
import './App.scss';

const messages : Record<string, Record<string, string>> = {
  'en-US': {selectalanguage: 'Select a language'},
  'fr-FR': {selectalanguage: 'Selecctioner un language'}
}

const initialLocale = 'en-US';
export const cache = createIntlCache();

export let intl = createIntl(
  {locale: initialLocale, messages: messages[initialLocale]},
  cache
)



export const App : React.FC = () => {

  const [locale, setLocale] = React.useState(initialLocale);

  const changeLanguage = (newLocale: string) : void => {
    intl = createIntl({locale: newLocale, messages: messages[newLocale]}, cache);
    document.documentElement.lang = newLocale;
    setLocale(newLocale);
  }

  return (
    <RawIntlProvider value={intl}>
    <div className="App">
      <h1><FormattedMessage id="selectalanguage" /></h1>
      <select 
        name="local" 
        id="locale" 
        defaultValue={locale} 
        onChange={(event): void => changeLanguage(event.target.value)}>
        {Object.keys(messages).map(locale => (
          <option key={locale} value={locale}>{locale}
          </option>
        ))}
      </select>
    </div>
    </RawIntlProvider>
  );
}

