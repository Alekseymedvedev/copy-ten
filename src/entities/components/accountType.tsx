import React, {FC} from 'react';
import {Chip, Divider, Stack} from "@mui/material";

interface T {
    children?: any
}

const AccountType: FC<T> = ({children}) => {
    return (
        <Stack  direction="row" spacing="auto" mb={4} sx={{padding:`8px 28px`}} >
            <div className="">
                <span>Счет</span>
                <span>18050009</span>
            </div>
            <Stack direction="row" spacing={4}>
                <Chip label="Робот" color="secondary"/>
                <Chip label="Центовый" variant="filled" color="neutral"/>
            </Stack>
        </Stack>
    );
};

export default AccountType;