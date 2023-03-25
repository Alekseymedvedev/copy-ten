import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userApi} from "./API/userApi";
import barChartReducer from './slice/barChartSlice'
import {serverApi} from "./API/serverApi";
import {productApi} from "./API/productApi";

const rootReducer = combineReducers({
    [userApi.reducerPath]: userApi.reducer,
    [serverApi.reducerPath]: serverApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    barChartReducer
})


export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (gDM) => gDM().concat(
            userApi.middleware,
            serverApi.middleware,
            productApi.middleware,
            ),
    });

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']

