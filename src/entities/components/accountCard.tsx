import React, {FC} from 'react';
import AccountType from "./accountType";
import {Card, Divider, Stack} from "@mui/material";
import {Area, AreaChart, ResponsiveContainer} from "recharts";
import {chartData} from "../../data/chart";
import AccountHeader from "./accountHeader";
import IconAddAccount from "../../shared/assets/images/icons/iconAddAccount";

interface T {
    addAccount?: 'error' | 'success'
}

const AccountCard: FC<T> = ({addAccount}) => {
    return (
        <Card sx={{height: 375}}>
            <AccountType/>
            <Divider variant="fullWidth" sx={{mb: 7, ml: 14}}/>
            {
                addAccount === 'error' ?
                    <Stack alignItems="center" sx={{height: `100%`, mt: 23}}>
                        <IconAddAccount/>
                        <Stack className="h2 red" sx={{mb: 7, mt: 7}} textAlign="center">Заявка на добавление счета
                            отклонена</Stack>
                        <Stack className="subHeaders white-90" textAlign="center">
                            Здравствуйте! В заявке вы указали недействительный счет. Пожалуйста, проверьте
                            корректность введенных данных
                        </Stack>
                    </Stack>
                    : addAccount === 'success' ?
                        <Stack alignItems="center" sx={{height: `100%`, mt: 23}}>
                            <IconAddAccount success/>
                            <Stack className="h2 green" sx={{mb: 7, mt: 7}} textAlign="center">
                                Заявка на добавление счета одобрена
                            </Stack>
                        </Stack>
                        :  <>
                            <AccountHeader/>
                            <Stack sx={{width: '100%', height: 210}}>
                                <ResponsiveContainer>
                                    <AreaChart data={chartData} margin={{right: -5,bottom:-10, left: -5}}>
                                        <Area dataKey="uv" stroke="#6FCF97" fill="#29312C"/>
                                        <Area dataKey="pv" stroke="#56CCF2" fill="transparent"/>
                                    </AreaChart>
                                </ResponsiveContainer>
                            </Stack>
                        </>
            }
        </Card>
    );
};

export default AccountCard;