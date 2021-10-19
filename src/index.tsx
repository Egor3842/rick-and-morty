import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import LoadingPage from './ui/LoadingPage/LoadingPage';
import { store } from './state/redux';


ReactDOM.render(
  <Suspense fallback={<LoadingPage />}>
    <BrowserRouter>
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);

reportWebVitals();
