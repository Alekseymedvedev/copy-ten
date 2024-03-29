import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {headersAccept, headersAuthorization, headersContent} from "./APIToken";


export const tradeSetsApi = createApi({
    reducerPath: 'tradeSetsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}/admin/forex`,
        prepareHeaders: (headers, {getState}) => {
            headers.set("Content-type", headersContent)
            headers.set("Accept", headersAccept)
            headers.set("Authorization", headersAuthorization)
        },
    }),
    tagTypes: ['Set','Settings'],
    endpoints: (build) => ({
        getAllAdminSets: build.query({
            query: (page) => ({
                url: '/sets',
                params: {
                    page,
                }
            }),
            providesTags: ['Set'],
        }),
        getAllLinkedTraders: build.query({
            query: (id) => ({
                url: `/set/${id}/traders`
            }),
            providesTags: ['Set'],
        }),
         getAddLinkedTraders: build.query({
            query: (id) => ({
                url: `/set/${id}/traders/available`
            }),
            providesTags: ['Set'],
        }),
        getAllAdminTraders: build.query({
            query: (page) => ({
                url: '/traders',
                params: {
                    page,
                }
            }),
            providesTags: ['Set'],
        }),
        getAdminTradersSettings: build.query({
            query: (id) => ({
                url: `set/${id}/settings`,
            }),
            providesTags: ['Settings'],
        }),

        addSet: build.mutation({
            query: (body) => ({
                url: `/set`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Set']
        }),
        updateSet: build.mutation({
            query: ({body, id}) => ({
                url: `/set/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Set']
        }),
        settingsTrader: build.mutation({
            query: ({body, idSet,idTrader}) => ({
                url: `set/${idSet}/link-trader/${idTrader}`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Set']
        }),
        updateSettingsTrader: build.mutation({
            query: ({body,idTrader}) => ({
                url: `/trader-to-set-link/${idTrader}/settings`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Set','Settings']
        }),
        deleteSet: build.mutation({
            query(id) {
                return {
                    url: `/set/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Set']
        }),
        deleteTrader: build.mutation({
            query(id) {
                return {
                    url: `/trader-to-set-link/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Set']
        }),
    })
});

export const {
    useGetAllAdminSetsQuery,
    useGetAdminTradersSettingsQuery,
    useGetAllAdminTradersQuery,
    useGetAllLinkedTradersQuery,
    useGetAddLinkedTradersQuery,
    useUpdateSetMutation,
    useSettingsTraderMutation,
    useUpdateSettingsTraderMutation,
    useAddSetMutation,
    useDeleteSetMutation,
    useDeleteTraderMutation
} = tradeSetsApi;

export const {getAllAdminSets} = tradeSetsApi.endpoints;