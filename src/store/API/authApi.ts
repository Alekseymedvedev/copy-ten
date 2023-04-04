import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}`,
        prepareHeaders: (headers, {getState}) => {
            headers.set("Content-type", "application/json")
            headers.set("Accept", "application/json")
        },
    }),
    // tagTypes: ['Accounts'],
    endpoints: (build) => ({
        // getServers: build.query<>({
        //     query: () => ({
        //         url: '/servers'
        //     })
        // }),

        getToken: build.mutation({
            query: (hash) => ({
                url: `/login/hash/${hash}`,
                method: 'POST',
            }),
            // invalidatesTags: ['Accounts']
        }),

    })
});

export const {useGetTokenMutation} = userApi;

export const {getToken} = userApi.endpoints;

