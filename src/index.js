import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom'


import currentUserReducer from './reducers/currentUserReducer';
import logInFormReducer from './reducers/logInFormReducer';
import signupFormReducer from './reducers/signupFormReducer';
import petsReducer from './reducers/petsReducer';


const reducer = combineReducers({
  currentUser: currentUserReducer,
  loginForm: logInFormReducer,
  pets: petsReducer,
  signupForm: signupFormReducer
})

function saveToLocalStorage (state)  {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e){
    console.log(e)
  }
}
function loadFromLocalStorage () {
  try {
    const serializedState = localStorage.getItem('state')
    if(serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e){
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, persistedState, composeEnhancer(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()))


ReactDOM.render(
    <Provider store={store}>
      <Router >
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
);
