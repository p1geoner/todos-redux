import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todosReducer from "./reducers/TodoSlice.ts";
import {todosAPI} from "../services/TodoService.ts";


 const rootReducer = combineReducers({
    todosReducer,
     [todosAPI.reducerPath]: todosAPI.reducer
})
export const setupStore = ()=>{
     return configureStore(
         {
             reducer: rootReducer,
             middleware: (getDefaultMiddleware)=>
                 getDefaultMiddleware().concat(todosAPI.middleware)
         }
     )
}

export type  RootState = ReturnType<typeof rootReducer>
export type  AppStore = ReturnType<typeof setupStore>
export type  AppDispatch = AppStore['dispatch']