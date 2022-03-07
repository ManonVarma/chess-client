import { createStore, applyMiddleware } from 'redux'
import { usersReducer } from './reducer'
import logger from 'redux-logger'

const store = createStore(usersReducer, applyMiddleware(logger))

export default store