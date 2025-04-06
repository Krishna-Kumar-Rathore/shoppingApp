import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/Store.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; // ✅ Import Toaster

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Provider store={store}>
    <BrowserRouter basename="/shoppingApp">
        <Toaster position="top-right" reverseOrder={false} /> {/* ✅ Add Toaster */}
        <App />
    </BrowserRouter>
      </Provider>
  </StrictMode>
);
