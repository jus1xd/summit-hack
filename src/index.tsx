import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import {setupStore} from "./store/store"
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);



