import React, {FC} from 'react';
import AccountType from "./accountType";
import {Card, Divider, Stack} from "@mui/material";
import {Area, AreaChart, ResponsiveContainer, Tooltip} from "recharts";
import {chartData} from "../../data/chart";
import AccountHeader from "./accountHeader";
import IconAddError from "../../shared/assets/images/icons/iconAddError";

interface T {
    addError?: boolean
}

const AccountCard: FC<T> = ({addError}) => {
    return (
        <Card>
            <AccountType/>
            <Divider variant="fullWidth" sx={{mb: 14}}/>
            {
                addError ?
                    <Stack justifyContent="center" alignItems="center">
                        <IconAddError/>
                        <Stack className="red" sx={{mb: 7}}>Заявка на добавление счета отклонена</Stack>
                        <Stack textAlign="center">
                            Здравствуйте! В заявке вы указали недействительный счет. Пожалуйста, проверьте
                            корректность введенных данных
                        </Stack>
                    </Stack>
                    :
                    <>
                        <AccountHeader/>
                        <Stack sx={{width: '100%', height: 205}}>
                            <ResponsiveContainer>
                                <AreaChart data={chartData} >
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