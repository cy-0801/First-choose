import reducers from "./reducer"
import {createStore,combineReducers,applyMiddleware} from "redux"
import reduxThunk from "redux-thunk"

const reducer = combineReducers({
    reducers
})

const store = createStore(reducer,applyMiddleware(reduxThunk))

export default store