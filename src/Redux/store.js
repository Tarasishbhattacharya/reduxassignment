import {legacy_createStore as createStore} from "redux"
import { countReducer } from "./reducer"

export const store=createStore(countReducer,{counter:0,todos:[]})