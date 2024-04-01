
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducers';
import App from './App'; 

import { createStore } from 'redux';
function initializeApp() {
  const store = createStore(reducer);

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
}
export default initializeApp;
