import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './modules';
import { Provider, useDispatch } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';



const store = createStore(
  rootReducer,
  // applyMiddleware(thunk),
  composeWithDevTools(applyMiddleware(logger, thunk ))
);



  
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
 


reportWebVitals();
