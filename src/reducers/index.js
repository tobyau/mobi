import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'; // can see in browser 
import thunkMiddleware from 'redux-thunk'; //create thunks for axios request 
import { composeWithDevTools } from 'redux-devtools-extension'; // use logger to display
import Login from './login';


var middleWare = composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger({collapsed: true})))

const store = createStore(Login, middleWare);

export default store;