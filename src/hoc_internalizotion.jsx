import React from 'react';
import i18n from '../src/locales/i18n'; 

const I18nProvider = ({ children }) => {
  return (
    <i18n.Provider i18n={i18n}>
      {children}
    </i18n.Provider>
  );
}

export default I18nProvider;
