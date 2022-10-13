import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import { ThemeProvider } from './context/Theme';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </PersistGate>
    </React.StrictMode>
  </Provider>
  
);


