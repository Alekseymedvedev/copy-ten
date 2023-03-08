import React, {FC} from 'react';
import {Chip, Divider, Stack, useMediaQuery} from "@mui/material";

interface T {
    children?: any
}


const AccountType: FC<T> = ({children}) => {
    const mediaQuery = useMediaQuery('(max-width:900px)');
    return (
        <Stack
            direction={mediaQuery ? "column" : "row"}
            alignItems={mediaQuery ? "center" : "flex-start"}
            spacing="auto"
            mb={4}
            sx={{padding: `8px 28px`}}
        >
            <div>
                <span className="h2 white-80">Счет</span>
                <span className="h2 white-90">&nbsp;18050009</span>
            </div>
            <Stack direction="row" spacing={4}>
                <Chip label="Робот" color="secondary"/>
                <Chip label="Центовый" variant="filled" color="neutral"/>
            </Stack>
        </Stack>
    );
};

export default AccountType;