import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {headersAccept, headersAuthorization, headersContent} from "./APIToken";


export const subscribesApi = createApi({
    reducerPath: 'subscribesApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}/user/forex`,
        prepareHeaders: (headers, {getState}) => {
            headers.set("Content-type", headersContent)
            headers.set("Accept", headersAccept)
            headers.set("Authorization", headersAuthorization)
        },
    }),
    tagTypes: ['Settings','Subscribe'],
    endpoints: (build) => ({
        getAllSubscribes: build.query({
            query: (id) => ({
                url: `/account/${id}/subscribes/traders`
            }),
            providesTags: ['Subscribe'],
        }),
        getAllSubscribesSet: build.query({
            query: (id) => ({
                url: `/account/${id}/subscribes/sets`
            }),
        }),
        getAllSubscribesSettings: build.query({
            query: (id) => ({
                url: `/subscribe/${id}/subscribes/sets`
            }),
            providesTags: ['Settings'],
        }),
        getSubscribesSettings: build.query({
            query: (id) => ({
                url: `/subscribe/${id}/settings`
            }),
            providesTags: ['Settings'],
        }),

        updateSettings: build.mutation({
            query: ({body, id}) => ({
                url: `/subscribe/${id}/settings`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Settings']
        }),
        deleteServer: build.mutation({
            query(id) {
                return {
                    url: `subscribe/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Subscribe']
        }),
    }),

});

export const {
    useGetAllSubscribesQuery,
    useGetAllSubscribesSetQuery,
    useGetAllSubscribesSettingsQuery ,
    useGetSubscribesSettingsQuery
} = subscribesApi;

export const { getAllSubscribes } = subscribesApi.endpoints;