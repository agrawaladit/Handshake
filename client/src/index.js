import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer'
import { devToolsEnhancer } from 'redux-devtools-extension';
//import {getUsers} from './actions/actions'

const store = createStore(rootReducer, devToolsEnhancer())
// console.log(store.getState());
// store.dispatch(getUsers())
// console.log(store.getState());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
