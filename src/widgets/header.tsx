import React, {FC} from 'react';
import {Typography, Stack, useMediaQuery, Chip} from "@mui/material";
import CustomSelect from "../shared/UI/customSelect";

interface T {
    heading?: string;
    accountNumber?: string;
    typeAccount?: 'dollar' | 'cent' | 'copytrad' | 'robot'
}


const Header: FC<T> = ({heading, accountNumber, typeAccount}) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');

    return (
        <header className="header">
            <Stack direction={mediaQuery ? "row" : "column"} spacing="auto" alignItems="center">
                <Stack
                    direction={mediaQuery ? "row" : "column"}
                    spacing={mediaQuery ? 7: 4}
                    alignItems="center"
                    sx={mediaQuery ?null: { mb:4}}>
                    <Typography variant="h1">
                        <span>{heading}</span>
                        {
                            accountNumber &&
                            <span>
                            <span className="white-90"> / Счет </span>
                            <span>{accountNumber}</span>
                        </span>
                        }
                    </Typography>
                    {typeAccount === 'dollar' && <Chip label="Долларовый" variant="filled" color="warning"/>}
                    {typeAccount === 'cent' && <Chip label="Центовый" variant="filled" color="neutral"/>}
                    {typeAccount === 'copytrad' && <Chip label="Копитрейдинг" variant="filled" color="success"/>}
                    {typeAccount === 'robot' && <Chip label="Робот" color="secondary"/>}
                </Stack>
                <Stack direction={mediaQuery ? "row" : "column"} alignItems="center" spacing={mediaQuery ? 7: 4}>
                    <Stack direction="row" alignItems="center">
                        <span className="subHeaders white-80">Загруженность счета:</span>
                        <span className="subHeaders yellow">&nbsp;67%</span>
                    </Stack>
                    <CustomSelect title="Выбор счета" defaultValue="Нет счетов"/>
                </Stack>
            </Stack>
        </header>
    );
};

export default Header;