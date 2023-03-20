import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {IUserAccounts} from "../types";
// 'https://api.copyten.ru/v1/user/forex/accounts'
const token ="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiODg4MjMyNzMyMTc3MWRjOTZkZjFlNTkyZTgzNmI2NzljYWVkZDAyNmQ1YmM4OTZhNjQ3NTQ0MTZlMmNjZjk3NTk2ZGY4MjQ2ZWNkN2ZiYWYiLCJpYXQiOjE2Nzg5NzQ0NTguNDc2NjI1LCJuYmYiOjE2Nzg5NzQ0NTguNDc2NjMxLCJleHAiOjE3MTA1OTY4NTguNDY1MTQzLCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.dVtgGXuovgW2nSNJ1ibLlTIhRjE3whwCeRvw7FIdxvjXPJaA7Me4XXADb2-TjMT-Oq-FHMqoDaPNE5OhY72jEyC8WzUVFPTuvLkR89Egz3pez818Z_vgt4q2fGPIJVJLVdZVOOzLc2weNhV-WGAkguH6SViYhZYmtc3LybjKDGFFenEZrjZnaAdYt85Ii8wtqLbU4YQvtXM2LkmhMhmtZPvKtlXy4FzL4rDIuLZ7mO05iHJSC4LRsHb1bW7rvv88oqQpTqUbzqb_JziMNdRWhiTP-WIqlKGakwr91gOztCY-WjZ__7gj6LH7_9ihATkX4c_HwnF7NsxzvmjezKZcxYjwWenyBVvWh8H6LZ1iPbbmhZ4g19uk5sAl9Re-DqVSbU36W6Z_LTobWqvtmcaLlXeC1-tL8a2VLMXZWawGFuuEOqoE9utqGHcsGY1T2OWzhhFPsyZc6fU28lZAOgqiWutU0N_5Ywula8t1bytauTfhKTHGxXfCW4V6Y30kM_NoSqpTxw90N9JufWj32oiSuZTb-P__g3D0Sha0bj71a5be3fNUbuOobUdLwrLKkPGg8dyWn0G9dPUXs01FlBZqghtnPlQku6gzgv4LUz0bfprT4gWRCXVjqTJHd93eNnbY64OOnInY3DUzEsyHFtjj_SojAWPE_yXvemShhBWP4ZY"
export const userApi = createApi({
    reducerPath:'userApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.copyten.ru/v1/user/forex",
        prepareHeaders: (headers, { getState }) => {
            headers.set("Content-type", "application/json")
            headers.set("Accept", "application/json")
            headers.set("Authorization", `Bearer ${token}`)
        },
    }),
    endpoints:(build)=>({
        getAccounts: build.query<IUserAccounts, any>({
            query:()=>({
                url:'/accounts'
            })
        }),
        addAccount: build.mutation({
            query: (body) => ({
                url: `/account`,
                method: 'POST',
                body,
            }),
        }),
    })
});

export const {useGetAccountsQuery} = userApi;
export const {useAddAccountMutation} = userApi;

export const {  getAccounts } = userApi.endpoints;