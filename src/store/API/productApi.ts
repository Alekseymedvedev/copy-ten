import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProductsData} from "../../types";


export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}/user`,
        prepareHeaders: (headers, {getState}) => {
            headers.set("Content-type", "application/json")
            headers.set("Accept", "application/json")
            headers.set("Authorization", `Bearer ${process.env.REACT_APP_TOKEN}`)
        },
    }),
    tagTypes: ['Products'],
    endpoints: (build) => ({
        getAllProducts: build.query<IProductsData, string>({
            query: () => ({
                url: '/products'
            })
        }),
        getProductsBySlug: build.query({
            query: (slug) => ({
                url: `/products/${slug}`
            })
        }),
        updateProduct: build.mutation({
            query({body, id}) {
                return {
                    url: `product/${id}`,
                    method: 'PATCH',
                    body,
                }
            },
            invalidatesTags: ['Products']
        }),
    }),

});

export const {useGetAllProductsQuery, useGetProductsBySlugQuery, useUpdateProductMutation } = productApi;

export const {getAllProducts} = productApi.endpoints;