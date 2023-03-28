import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUserAccountsData} from "../../types";

export const referralApi = createApi({
    reducerPath: 'referralApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${process.env.REACT_APP_URL}/referral`,
        prepareHeaders: (headers, {getState}) => {
            headers.set("Content-type", "application/json")
            headers.set("Accept", "application/json")
            headers.set("Authorization", `Bearer ${process.env.REACT_APP_TOKEN}`)
        },
    }),

    endpoints: (build) => ({
        getReferralData: build.query({
            query: () => ({
                url: '/main'
            })
        }),
   getReferralUsers: build.query({
            query: () => ({
                url: '/users'
            })
        }),


    })
});

export const {useGetReferralDataQuery, useGetReferralUsersQuery} = referralApi;

export const {getReferralData } = referralApi.endpoints;