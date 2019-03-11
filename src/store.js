import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers/reducer'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const logMiddleware = createLogger()

const store = createStore(reducer, applyMiddleware(
	thunk,
	logMiddleware
))

export default store 