import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {headersAccept, headersAuthorization, headersContent} from "./APIToken";


export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}`,
        prepareHeaders: (headers, {getState}) => {
            headers.set("Content-type", headersContent)
            headers.set("Accept", headersAccept)
        },
    }),
    endpoints: (build) => ({
        getToken: build.mutation({
            query: (hash) => ({
                url: `/login/hash/${hash}`,
                method: 'POST',
            }),
        }),

    })
});

export const {useGetTokenMutation} = userApi;

export const {getToken} = userApi.endpoints;

