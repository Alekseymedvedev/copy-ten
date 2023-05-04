import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const userToken = localStorage.getItem('token')
export const tradersUserApi = createApi({
    reducerPath: 'tradersUserApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}/user/forex/`,
        prepareHeaders: (headers, {getState}) => {
            headers.set("Content-type", "application/json")
            headers.set("Accept", "application/json")
            headers.set("Authorization", `Bearer ${userToken}`)
        },
    }),
    tagTypes: ['Trader'],
    endpoints: (build) => ({
        getAllUserTraders: build.query({
            query: (page) => ({
                url: '/traders',
                params: {
                    page,
                }
            }),
            providesTags: ['Trader'],
        }),
        getHistory: build.query({
            query: (id) => ({
                url: `${id}/history`
            }),
        }),
        getTrader: build.query({
            query: (id) => ({
                url: `trader/${id}`
            }),
            providesTags: ['Trader']
        }),
        addTrader: build.mutation({
            query: (body) => ({
                url: `/server`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Trader']
        }),
        subscribeTrader: build.mutation({
            query: ({ idTrader,idAccount,body}) => ({
                url: `trader/${idTrader}/account/${idAccount}/subscribe`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Trader']
        }),
        updateSettingsTrader: build.mutation({
            query: ({ idTrader,idAccount,body}) => ({
                url: `subscribe/${idTrader}/settings`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Trader']
        }),
        unsubscribeTrader: build.mutation({
            query: (idTrader) => ({
                url: `subscribe/${idTrader}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Trader']
        }),
    })
});

export const {
    useGetAllUserTradersQuery,
    useGetHistoryQuery,
    useGetTraderQuery,
    useSubscribeTraderMutation,
    useUpdateSettingsTraderMutation,
    useUnsubscribeTraderMutation
} = tradersUserApi;

export const { getAllUserTraders } = tradersUserApi.endpoints;