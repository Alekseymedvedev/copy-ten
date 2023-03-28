import React, {FC} from 'react';
import Referrals from "../entities/components/referrals";
import {Button, Skeleton, Stack, useMediaQuery} from "@mui/material";
import Paper from "@mui/material/Paper";
import {useGetReferralDataQuery, useGetReferralUsersQuery} from "../store/API/referalApi";

interface IType {
    children?: any
}

const ReferralsList: FC<IType> = ({children}) => {
    const {data, error, isLoading} = useGetReferralUsersQuery('/users')
    const mediaQuery = useMediaQuery('(min-width:900px)');
    console.log(data)
    return (
        <Paper>
            <Stack direction="row" alignItems="center" justifyContent="space-between" flexWrap="wrap" sx={{mb: 7}}>
                <Stack className="h2 white-90" sx={{mb: 7}}>Приглашенные люди</Stack>
                <Stack direction={mediaQuery ? "row" : "column"} alignItems={mediaQuery ? "center" : "flex-start"}
                       justifyContent="space-between" flexWrap="wrap" spacing={2}>
                    <Button variant="outlined" color="neutral">Все приглашенные</Button>
                    <Button variant="outlined" color="neutral">Первая линия</Button>
                    <Button variant="outlined" color="neutral">Вторая линия</Button>
                </Stack>
            </Stack>
            <Stack spacing={5}>
                {
                    isLoading ?
                        <Skeleton variant="rectangular" width={`100%`} height={63}/>
                        : data ?
                            data.data.map((item: any) =>
                                <Referrals
                                    avatar={item.telegram.avatar_url}
                                    name={item.telegram.first_name + ' ' + item.telegram.last_name}
                                    link={item.telegram.username}
                                    lastPayment={item.last_payment_in}
                                    registrationDate={item.reg_date}/>
                            )
                            : <Stack>Ошибка при загрузке данных</Stack>
                }
            </Stack>
        </Paper>
    );
};

export default ReferralsList;