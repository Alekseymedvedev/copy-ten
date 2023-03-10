import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
    reducerPath:'productsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.coinstats.app/public/v1',
    }),
    endpoints:(build)=>({
        getProduct: build.query({
            query:()=>({
                url:'/coins'
            })
        })
    })
});

export const {useGetProductQuery} = productsApi;

export const {  getProduct } = productsApi.endpoints;