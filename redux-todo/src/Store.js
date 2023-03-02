 import {createStore,combineReducers,applyMiddleware} from "redux"
 import { composeWithDevTools } from "redux-devtools-extension";
 import thunk from "redux-thunk"
 import TodoReducer from "./reducers/TodoReducer"

 const reducer = combineReducers({
   Todo : TodoReducer
 })
  const initialstate = {};
  const middleware = [thunk]; 
 const Store= createStore(
    reducer,
    initialstate,
    composeWithDevTools(applyMiddleware(...middleware))
 )  
  export default  Store; 