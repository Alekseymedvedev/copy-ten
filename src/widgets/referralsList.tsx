import React, {FC} from 'react';
import Referrals from "../entities/components/referrals";
import {Button, Stack} from "@mui/material";
import Paper from "@mui/material/Paper";

interface IType {
    children?: any
}

const ReferralsList: FC<IType> = ({children}) => {
    return (
        <Paper>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{mb: 7}}>
                <span className="h2 white-90">Приглашенные люди</span>
                <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                    <Button variant="outlined" color="neutral">Все приглашенные</Button>
                    <Button variant="outlined" color="neutral">Первая линия</Button>
                    <Button variant="outlined" color="neutral">Вторая линия</Button>
                </Stack>
            </Stack>
            <Stack spacing={5}>
                <Referrals name="Иванов Иван" link="@ryabishin" lastPayment="13.01.2023" registrationDate="19.03.2021"/>
                <Referrals name="Иванов Иван" link="@ryabishin" lastPayment="13.01.2023" registrationDate="19.03.2021"/>
                <Referrals name="Иванов Иван" link="@ryabishin" lastPayment="13.01.2023" registrationDate="19.03.2021"/>
                <Referrals name="Иванов Иван" link="@ryabishin" lastPayment="13.01.2023" registrationDate="19.03.2021"/>
                <Referrals name="Иванов Иван" link="@ryabishin" lastPayment="13.01.2023" registrationDate="19.03.2021"/>
                <Referrals name="Иванов Иван" link="@ryabishin" lastPayment="13.01.2023" registrationDate="19.03.2021"/>
            </Stack>
        </Paper>
    );
};

export default ReferralsList;