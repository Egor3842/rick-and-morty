import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMidlleWare from "redux-thunk";
import MainReducer from "./Reducers/MainReducer/MainReducer";

let reducers = combineReducers({
  MainReducer: MainReducer,
});

type reducersType = typeof reducers;

export type AppStateType = ReturnType<reducersType>;

export const store = createStore(reducers, applyMiddleware(thunkMidlleWare));
