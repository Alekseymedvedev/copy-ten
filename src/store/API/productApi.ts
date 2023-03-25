import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProductsData} from "../../types";


export const productApi = createApi({
    reducerPath:'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}/user`,
        prepareHeaders: (headers, { getState }) => {
            headers.set("Content-type", "application/json")
            headers.set("Accept", "application/json")
            headers.set("Authorization", `Bearer ${process.env.REACT_APP_TOKEN}`)
        },
    }),
    endpoints:(build)=>({
        getAllProducts: build.query<IProductsData,string>({
            query:()=>({
                url:'/products'
            })
        }),

    })
});

export const {useGetAllProductsQuery} = productApi;

export const {getAllProducts} = productApi.endpoints;