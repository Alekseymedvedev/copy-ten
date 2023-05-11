import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {headersAccept, headersAuthorization, headersContent} from "./APIToken";

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}/authentication`,
        prepareHeaders: (headers, {getState}) => {
            headers.set("Content-type", headersContent)
            headers.set("Accept", headersAccept)
            headers.set("Authorization", headersAuthorization)
        },
    }),

    endpoints: (build) => ({
        getProfile: build.query({
            query: () => ({
                url: '/check-token'
            }),
        }),
    })
});

export const { useGetProfileQuery } = profileApi;

export const { getProfile } = profileApi.endpoints;