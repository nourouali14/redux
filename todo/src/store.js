import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { userReducer } from "./Reducers/UserReducer";

const store=createStore(
    userReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store