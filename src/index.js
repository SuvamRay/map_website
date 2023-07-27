// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import './App.css';
import App from './App';
import store from './redux/store'; // Import the Redux store

ReactDOM.render(
  <Provider store={store}> {/* Wrap the App component with Provider and pass the store */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
