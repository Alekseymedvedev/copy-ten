import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {headersAccept, headersAuthorization, headersContent} from "./APIToken";



export const referralApi = createApi({
    reducerPath: 'referralApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}/referral`,
        prepareHeaders: (headers, {getState}) => {
            headers.set("Content-type", headersContent)
            headers.set("Accept", headersAccept)
            headers.set("Authorization", headersAuthorization)
        },
    }),
    tagTypes: ['Referral'],
    endpoints: (build) => ({
        getReferralData: build.query({
            query: () => ({
                url: '/main'
            }),
            providesTags: ['Referral'],
        }),
        getReferralUsers: build.query({
            query: () => ({
                url: '/users'
            }),
            providesTags: ['Referral'],
        }),
        getReferralLineUsers: build.query({
            query: (id) => ({
                url: `/users/line/${id}`
            }),
            providesTags: ['Referral'],
        }),


    })
});

export const {useGetReferralDataQuery, useGetReferralUsersQuery, useGetReferralLineUsersQuery} = referralApi;

export const {getReferralData} = referralApi.endpoints;