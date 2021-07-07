import { createStore } from "redux";
import currencyReducer from "./currency_reducer";

export default createStore(currencyReducer)