import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import languageReducer from './language/languageReducer'
import recommendProductsReducer from './recommendProducts/recommendProductsReducer'

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

export default store
