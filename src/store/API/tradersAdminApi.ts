import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {headersAccept, headersAuthorization, headersContent} from "./APIToken";


export const traderAdminApi = createApi({
    reducerPath: 'traderAdminApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}/admin/forex`,
        prepareHeaders: (headers, {getState}) => {
            headers.set("Content-type", headersContent)
            headers.set("Accept", headersAccept)
            headers.set("Authorization", headersAuthorization)
        },
    }),
    tagTypes: ['Trader'],
    endpoints: (build) => ({
        getAllAdminTraders: build.query({
            query: (page) => ({
                url: '/traders',
                params: {
                    page,
                }
            }),
            providesTags: ['Trader'],
        }),

        addTrader: build.mutation({
            query: (body) => ({
                url: `/trader`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Trader']
        }),
        updateTrader: build.mutation({
            query: ({id, body}) => ({
                url: `/trader/${id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Trader']
        }),


        deleteTrader: build.mutation({
            query(id) {
                return {
                    url: `/trader/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Trader']
        }),
    })
});

export const {
    useGetAllAdminTradersQuery,
    useDeleteTraderMutation,
    useAddTraderMutation,
    useUpdateTraderMutation
} = traderAdminApi;

export const {} = traderAdminApi.endpoints;