import { StoreCreator, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Reducers } from "./reducers";

export const store = StoreCreator(
    Reducers, {},
    applyMiddleware(thunk));