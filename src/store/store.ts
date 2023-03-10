import { configureStore } from "@reduxjs/toolkit";
import {productsApi} from "./productApi";

export const makeStore = () =>
    configureStore({
        reducer: {
            [productsApi.reducerPath]: productsApi.reducer,
        },
        middleware: (gDM) => gDM().concat(productsApi.middleware),
    });

export type AppStore = ReturnType<typeof makeStore>;


