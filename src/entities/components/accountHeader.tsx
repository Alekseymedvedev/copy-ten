import React, {FC} from 'react';
import {Chip, Stack} from "@mui/material";

interface T {
    children?: any
}


const AccountHeader: FC<T> = ({children}) => {
    return (
        <Stack sx={{mb:14,padding:`0px 28px`}}>
            <Stack direction="row" alignItems="center" spacing="auto">
                <div className="h2 white-90">Баланс счета</div>
                <div className="h1">102.837 Cent</div>
            </Stack>
            <Stack spacing={4}>
                <Stack direction="row" alignItems="center" spacing="auto">
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Chip variant="filled" color="success" sx={{padding: 0, width: 28, height: 8}}/>
                        <span className="subHeaders white-90">Денежный</span>
                    </Stack>
                    <span className="subHeaders green">+9384.23 C</span>
                </Stack>
                <Stack direction="row" alignItems="center" spacing="auto">
                    <Stack direction="row" alignItems="center" spacing={2}>
                        <Chip variant="filled" color="info" sx={{padding: 0, width: 28, height: 8}}/>
                        <span className="subHeaders white-90">В процентах</span>
                    </Stack>
                    <span className="subHeaders blue">+9384.23 C</span>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default AccountHeader;