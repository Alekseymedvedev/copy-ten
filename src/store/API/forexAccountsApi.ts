import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUserAccountsData} from "../../types";

export const forexAccountsApi = createApi({
    reducerPath: 'forexAccountsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}forex/`,
        prepareHeaders: (headers, {getState}) => {
            headers.set("Content-type", "application/json")
            headers.set("Accept", "application/json")
            headers.set("Authorization", `Bearer ${process.env.REACT_APP_TOKEN}`)
        },
    }),
    tagTypes: ['ForexAccount'],
    endpoints: (build) => ({
        getForexAccounts: build.query({
            query: () => ({
                url: '/accounts'
            })
        }),
        updateForexAccount: build.mutation({
            query: ({body, id}) => ({
                url: `/account/${id}`,
                method: 'PATCH',
                body,
            }),
            invalidatesTags: ['ForexAccount']
        }),

    })
});

export const { useGetForexAccountsQuery, useUpdateForexAccountMutation } = forexAccountsApi;

export const { getForexAccounts } = forexAccountsApi.endpoints;