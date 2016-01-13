import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { routeReducer } from 'redux-simple-router'

import reducers from '../reducers/index'

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const reducer = combineReducers({
  reducers,
  routing: routeReducer
})

export default function configureStore(initialState) {
  return finalCreateStore(reducer, initialState)
}
