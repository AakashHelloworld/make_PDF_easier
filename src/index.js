import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { pdfjs } from 'react-pdf';
import { Provider } from 'react-redux'
import {store} from "./Store/store"
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>   
    <App />
  </Provider>

);
