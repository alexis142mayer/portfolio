import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

export { content, profile } from './content.js';

export const render = (lang) =>
  renderToString(
    <StrictMode>
      <App lang={lang} />
    </StrictMode>,
  );
