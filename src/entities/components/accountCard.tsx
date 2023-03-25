import React, {FC} from 'react';
import AccountType from "./accountType";
import {Divider, Skeleton, Stack, Typography} from "@mui/material";
import {Area, AreaChart, ResponsiveContainer} from "recharts";
import AccountHeader from "./accountHeader";
import IconAddAccount from "../../shared/assets/images/icons/iconAddAccount";
import {IBalance, Server} from "../../types";
import {NavLink} from "react-router-dom";
import {useGetAccountsQuery} from "../../store/API/userApi";

interface T {
    isLoading?: boolean;
    accountLogin?: number | string;
    status: number;
    productType?: string;
    balance?: IBalance;
    accountType?:Server;
    accountNumber?: number | string;
}

const AccountCard: FC<T> = ({
                                isLoading,
                                accountLogin,
                                status,
                                productType,
                                accountNumber,
                                balance,
                                accountType
                            }) => {

    if (isLoading) {
        return (
            <Stack sx={{height: 400, border: ` 0.5px solid #3C3C3C`, borderRadius: 2.5, overflow: 'hidden'}}
                   spacing={7}>
                <Skeleton variant="rounded" width={`100%`} height={`100%`}/>
            </Stack>
        )
    }

    return (
        <Stack sx={{height: 400, border: ` 0.5px solid #3C3C3C`, borderRadius: 2.5, overflow: 'hidden'}}>
            <AccountType
                accountLogin={accountLogin}
                productType={productType}
                accountType={accountType}
                accountNumber={accountNumber}
            />
            <Divider variant="fullWidth" sx={{mb: 14, ml: 14}}/>
            <NavLink to={`/exchange-account/${accountLogin}`}>
                {
                    status === -1 ?
                        <Stack alignItems="center" sx={{height: `100%`, mt: 23}}>
                            <IconAddAccount/>
                            <Stack className="h2 red" sx={{mb: 7, mt: 7}} textAlign="center">Заявка на добавление счета
                                отклонена</Stack>
                            <Stack className="subHeaders white-90" textAlign="center">
                                Здравствуйте! В заявке вы указали недействительный счет. Пожалуйста, проверьте
                                корректность введенных данных
                            </Stack>
                        </Stack>
                        : status === 0 ?
                            <Stack alignItems="center" sx={{height: `100%`, mt: 23}}>
                                <IconAddAccount success/>
                                <Stack className="h2 blue" sx={{mb: 7, mt: 7}} textAlign="center">
                                    Ожидание рассмотрения заявки на добавление счета
                                </Stack>
                            </Stack>
                            : <>
                                <AccountHeader balance={balance} accountType={accountType?.type}/>
                                <Stack sx={{width: '100%', height: 210}}>
                                    <ResponsiveContainer>
                                        <AreaChart data={balance?.graph} margin={{right: 0, bottom: 0, left: 0}}>
                                            <Area dataKey="uv" stroke="#6FCF97" fill="#29312C"/>
                                            <Area dataKey="pv" stroke="#56CCF2" fill="transparent"/>
                                        </AreaChart>
                                    </ResponsiveContainer>
                                </Stack>
                            </>
                }
            </NavLink>
        </Stack>
    );
};

export default AccountCard;