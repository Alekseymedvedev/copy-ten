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
        getAllProducts: build.query<IProductsData, string | number>({
            query: (page) => ({
                url: '/products',
                params: {
                    page,

                }
            }),
            providesTags: ['Products'],
        }),
        getProductsBySlug: build.query({
            query: ({slug, page}) => ({
                url: `/products/${slug}`,
                params: {
                    page,
                }
            }),
            providesTags: ['Products']
        }),
        getPaymentLink: build.query({
            query: (id) => ({
                url: id
            }),
            providesTags: ['Products']
        }),
        createNewProduct: build.mutation({
            query: ({body, slug}) => ({
                url: `/product/${slug}`,
                method: 'Post',
                body
            }),
            invalidatesTags: ['Products']
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

export const {
    useGetAllProductsQuery,
    useGetProductsBySlugQuery,
    useUpdateProductMutation,
    useCreateNewProductMutation,
    useGetPaymentLinkQuery
} = productApi;

export const {getAllProducts} = productApi.endpoints;