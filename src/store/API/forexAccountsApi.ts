import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {headersAccept, headersAuthorization, headersContent} from "./APIToken";



export const forexAccountsApi = createApi({
    reducerPath: 'forexAccountsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}/admin/forex/`,
        prepareHeaders: (headers, {getState}) => {
            headers.set("Content-type", headersContent)
            headers.set("Accept", headersAccept)
            headers.set("Authorization", headersAuthorization)

        },
    }),
    tagTypes: ['ForexAccount'],
    endpoints: (build) => ({
        getForexAccounts: build.query({
            query: ({page, sort, search}) => ({
                url: `/accounts`,
                params:{
                    page,
                    orderBy:`created_at`,
                    sortedBy:sort,
                    search: search !== "null" ? `status:${search}`:''
                }
            }),
            providesTags: ['ForexAccount'],
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