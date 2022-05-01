import { ADD_COUNT, ADD_TODO, DEL_TODO } from "./action";
import {store} from "./store"


export const countReducer=(store,{type,payload})=>{
     switch(type){
         case ADD_COUNT:return {...store,counter:store.counter+payload};
         case ADD_TODO:return {...store,todos:[...store.todos,payload]};
         case DEL_TODO :return {...store,todos:[...store.todos,!payload]}
         default:
             return store;
     }
}