import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { persistor, store } from './store/store';

import 'flag-icon-css/css/flag-icons.min.css';
import './i18next';
import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));

const LoadingMarkup = (
  <div className="text-center">
    <div>Loading...</div>
  </div>
);

root.render(
  <Suspense fallback={LoadingMarkup}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </Suspense>
);
