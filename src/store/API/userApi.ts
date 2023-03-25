import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUserAccountsData} from "../../types";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}/user/forex`,
        prepareHeaders: (headers, {getState}) => {
            headers.set("Content-type", "application/json")
            headers.set("Accept", "application/json")
            headers.set("Authorization", `Bearer ${process.env.REACT_APP_TOKEN}`)
        },
    }),
    tagTypes: ['Accounts'],
    endpoints: (build) => ({
        getServers: build.query({
            query: () => ({
                url: '/servers'
            })
        }),
        getAccounts: build.query<IUserAccountsData, any>({
            query: (limit: number = 5) => ({
                url: '/accounts',
                _limit: limit
            }),
            providesTags: ['Accounts'],
        }),
        addAccount: build.mutation({
            query: (body) => ({
                url: `/account`,
                method: 'POST',
                body,
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
    })
});

export const {useGetServersQuery, useGetAccountsQuery, useAddAccountMutation, useUpdateAccountMutation} = userApi;

export const {getAccounts} = userApi.endpoints;