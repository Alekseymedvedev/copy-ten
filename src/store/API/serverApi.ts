import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IServerData, Server} from "../../types";
import {headersAccept, headersAuthorization, headersContent} from "./APIToken";


export const serverApi = createApi({
    reducerPath: 'serverApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}/admin/forex/`,
        prepareHeaders: (headers, {getState}) => {
            headers.set("Content-type", headersContent)
            headers.set("Accept", headersAccept)
            headers.set("Authorization", headersAuthorization)
        },
    }),
    tagTypes: ['Server'],
    endpoints: (build) => ({
        getAllServers: build.query<IServerData, string>({
            query: () => ({
                url: '/servers'
            }),
            providesTags: ['Server'],
        }),
        getServer: build.query({
            query: (id) => ({
                url: `/servers/${id}`
            }),
            providesTags: ['Server'],
        }),
        addServer: build.mutation({
            query: (body) => ({
                url: `/server`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Server']
        }),
        updateServer: build.mutation({
            query: ({body, id}) => ({
                url: `/server/${id}`,
                method: 'PUT',
                body,
            }),
            invalidatesTags: ['Server']
        }),
        deleteServer: build.mutation({
            query(id) {
                return {
                    url: `server/${id}`,
                    method: 'DELETE',
                }
            },
            invalidatesTags: ['Server']
        }),
    })
});

export const {useGetAllServersQuery, useGetServerQuery, useAddServerMutation, useUpdateServerMutation,useDeleteServerMutation} = serverApi;

export const {getAllServers} = serverApi.endpoints;