import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import JobsList from "./components/jobslist.js";

import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const messages = {
  'es': localeEsMessages,
  'en': localeEnMessages
};

const browserLanguage = navigator.language.split(/[-_]/)[0];
console.log(browserLanguage)
const locale = messages[browserLanguage] ? browserLanguage : 'en-US';

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages[locale]}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);