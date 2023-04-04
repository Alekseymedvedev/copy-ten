import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userApi} from "./API/userApi";
import barChartReducer from './slice/barChartSlice'
import authReducer from './slice/authSlice'
import {serverApi} from "./API/serverApi";
import {productApi} from "./API/productApi";
import {referralApi} from "./API/referalApi";
import {forexAccountsApi} from "./API/forexAccountsApi";

const rootReducer = combineReducers({
    [userApi.reducerPath]: userApi.reducer,
    [serverApi.reducerPath]: serverApi.reducer,
    [productApi.reducerPath]: productApi.reducer,
    [referralApi.reducerPath]: referralApi.reducer,
    [forexAccountsApi.reducerPath]: forexAccountsApi.reducer,
    barChartReducer,
    authReducer
})


export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
        middleware: (gDM) => gDM().concat(
            userApi.middleware,
            serverApi.middleware,
            productApi.middleware,
            referralApi.middleware,
            forexAccountsApi.middleware,
            ),
    });

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch']

