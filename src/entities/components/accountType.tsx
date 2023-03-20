import React, {FC} from 'react';
import {Chip, Divider, IconButton, Stack, useMediaQuery} from "@mui/material";
import IconEdit from "../../shared/assets/images/icons/iconEdit";

interface T {
    accountType?: 'cent' | 'dollar'
    accountNumber?: number | string;
    productType?: string;
}


const AccountType: FC<T> = ({accountType,accountNumber,productType}) => {
    const mediaQuery = useMediaQuery('(max-width:900px)');
    return (
        <Stack
            direction={mediaQuery ? "column" : "row"}
            alignItems={mediaQuery ? "center" : "flex-start"}
            spacing="auto"
            mb={4}
            sx={{padding: `8px 28px`}}
        >
            <Stack spacing={2}>
                <span className="subHeaders white-80">{accountNumber}</span>
                <Stack direction="row">
                    <span className="h2 white-100">Имя счета</span>
                    <IconButton>
                        <IconEdit/>
                    </IconButton>
                </Stack>
            </Stack>
            <Stack direction="row" spacing={4}>
                {
                    productType === "Копировальщик"
                    ?<Chip label="Копировальщик" color="success"/>
                        : <Chip label="Робот" color="secondary"/>
                }
                {/*<Chip label="Робот" color="secondary"/>*/}
                {
                    accountType === 'cent' ?
                        <Chip label="Центовый" variant="filled" color="neutral"/>
                        :
                        <Chip label="Долларовый" variant="filled" color="warning"/>
                }

            </Stack>
        </Stack>
    );
};

export default AccountType;