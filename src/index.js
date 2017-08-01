import React from 'react';
import ReactDOM from 'react-dom';
import allReducers from './reducers';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk  from 'redux-thunk';
import {createLogger} from 'redux-logger';
import App  from './components/videoplayer';
import registerServiceWorker from './registerServiceWorker';


const miiddleware = [thunk]
if(process.env,NODE_ENV != 'production'){
  miiddleware.push(createLogger())
}

const store = createStore(allReducers,applyMiddleware(...miiddleware))

ReactDOM.render(
  <Provider store = {store}>
  <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
