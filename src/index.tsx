import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app/App";
import {Provider} from "react-redux";
import {makeStore} from "./store/store";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const store = makeStore()
root.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>
);


