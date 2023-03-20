import { configureStore } from "@reduxjs/toolkit";
import {userApi} from "./userApi";

export const makeStore = () =>
    configureStore({
        reducer: {
            [userApi.reducerPath]: userApi.reducer,
        },
        middleware: (gDM) => gDM().concat(userApi.middleware),
    });

export type AppStore = ReturnType<typeof makeStore>;


