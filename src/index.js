import React from 'react';
import ReactDOM from 'react-dom';
import allReducers from './reducers';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk  from 'redux-thunk';
import App  from './components/videoplayer';
import {composeWithDevTools} from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';


const store = createStore(allReducers,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store = {store}>
  <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
