import React, {FC} from 'react';
import {Skeleton, Stack} from "@mui/material";
import {useAppSelector} from "../../hooks/useRedux";

interface T {
    data?: any;
    isTrader?: any;
}


const TransactionsLabel: FC<T> = ({data,isTrader}) => {
    const {accountId} = useAppSelector(state => state.accountIdReducer)

    const dataLabel = [
        {
            title: 'Всего сделок',
            value: data?.deals_count?.all,
            colorText: 'white-100',
            colorBg: '',
        },
        {
            title: 'Доходных сделки',
            value: data?.deals_count?.profitable,
            colorText: 'green',
            colorBg: 'greenBg',
        },
        {
            title: 'Убыточные сделки',
            value: data?.deals_count?.losing,
            colorText: 'red',
            colorBg: 'redBg',
        },
        {
            title: 'Нагрузка депозита',
            value: isTrader ? `${data?.deposit_load.for_forex_accounts[accountId]}%` :`${data?.deposit_load}%`,
            colorText: 'blue',
            colorBg: 'blueBg',
        },

    ]
    return (
        <>
            <Stack direction="row" flexWrap="wrap" gap={7} justifyContent="space-between">
                {
                    dataLabel && dataLabel.map((item,index:any) => (
                        data ?
                            <Stack
                                key={item.title}
                                className={item.colorBg}
                                sx={{
                                    height: 140,
                                    width: 140,
                                    padding: 7,
                                    border: `0.5px solid #3C3C3C`,
                                    borderRadius: 2,
                                }}
                                justifyContent="space-between"
                            >
                                <span className="h2 white-90">{item.title}</span>
                                <span className={item.colorText + " h2"}>{item.value}</span>
                            </Stack>
                            :
                            <Skeleton key={index} variant="rounded" width={140} height={140}/>
                    ))
                }
            </Stack>

        </>
    );
};

export default TransactionsLabel;