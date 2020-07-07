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


const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  loginForm: logInFormReducer,
  pets: petsReducer,
  signupForm: signupFormReducer
})

function loadFromLocalStorage () {
  try {
    const serializedState = localStorage.getItem('state')
    if(serializedState === null) return undefined
    console.log(serializedState.currentUser)
    return JSON.parse(serializedState)
  } catch(e){
    console.log(e)
    return undefined
  }
}

function saveToLocalStorage (state)  {
  try {
    const serializedState = JSON.stringify(state)
    console.log(serializedState)

    localStorage.setItem('state', serializedState)
  } catch(e){
    console.log(e)
  }
}

const persistedState = loadFromLocalStorage()
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, persistedState, composeEnhancer(applyMiddleware(thunk)));

store.subscribe(() => saveToLocalStorage(store.getState()))



ReactDOM.render(
    <Provider store={store}>
      <Router >
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
);
