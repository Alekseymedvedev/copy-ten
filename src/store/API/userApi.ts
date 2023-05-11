import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IServerData, IUserAccountsData} from "../../types";
import {headersAccept, headersAuthorization, headersContent} from "./APIToken";


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}/user/forex`,
        prepareHeaders: (headers, {getState}) => {
            headers.set("Content-type", headersContent)
            headers.set("Accept", headersAccept)
            headers.set("Authorization", headersAuthorization)
        },
    }),
    tagTypes: ['Accounts'],
    endpoints: (build) => ({
        getServers: build.query<IServerData, string>({
            query: () => ({
                url: '/servers'
            })
        }),
        getAccounts: build.query<IUserAccountsData, any>({
            query: (page) => ({
                url: '/accounts',
                params: {
                    page,
                }
            }),
            providesTags: ['Accounts'],
        }),
        getSet: build.query({
            query: (page) => ({
                url: '/sets',
                params: {
                    page,
                }
            }),
            providesTags: ['Accounts'],
        }),
        getAccountDashboard: build.query({
            query: (id) => ({
                url: `/account/${id}`,
            }),
        }),
        getAccountSymbol: build.query({
            query: (id) => ({
                url: `/account/${id}/used-symbols`,
            }),
        }),
        addAccount: build.mutation({
            query: (body) => ({
                url: `/account`,
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Accounts']
        }),
        addAccountSubscribe: build.mutation({
            query: ({idSet, accountId}) => ({
                url: `/set/${idSet}/account/${accountId}/subscribe`,
                method: 'POST',
            }),
            invalidatesTags: ['Accounts']
        }),
        updateAccount: build.mutation({
            query: ({body, id}) => ({
                url: `/account/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['Accounts']
        }),
        deleteAccount: build.mutation({
            query: (id) => ({
                url: `/account/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Accounts']
        }),
    })
});

export const {
    useGetServersQuery,
    useGetAccountsQuery,
    useGetAccountSymbolQuery,
    useGetAccountDashboardQuery,
    useGetSetQuery,
    useAddAccountMutation,
    useAddAccountSubscribeMutation,
    useUpdateAccountMutation,
    useDeleteAccountMutation,
} = userApi;

export const {getAccounts} = userApi.endpoints;