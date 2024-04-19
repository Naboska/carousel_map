import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'elui-react';

import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConfigProvider>
    <App />
  </ConfigProvider>
);
