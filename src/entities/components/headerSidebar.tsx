import React, {FC} from 'react';
import cls from '../headerSidebar/headerSidebar.module.scss'
import {Avatar, Chip, Stack, useMediaQuery} from "@mui/material";
import IconDollar from "../../shared/assets/images/icons/iconDollar";
import IconAccount from "../../shared/assets/images/icons/iconAccount";

interface T {
    name: string;
    images?: string;
    balance: string;
    account: string;
}


const HeaderSidebar: FC<T> = ({name, images, balance, account}) => {
    const mediaQuery = useMediaQuery('(max-width:900px)');
    return (
        <Stack direction="row" spacing={7}>
            <Avatar
                alt={name}
                src={images}
                sx={{width:mediaQuery ? 34 : 74, height:mediaQuery ? 34 : 74}}
            />
            <Stack
                flexGrow={1}
                spacing={2}
                direction={mediaQuery ? "row": "column"}
                justifyContent={mediaQuery ? "space-between": "flex-start"}
            >
                <Stack>
                    <div className="subHeaders white-80">@ryabishin</div>
                    <div className="h2">Виталий</div>
                </Stack>
                <Chip label={account} variant="outlined" color={"neutral"} icon={<IconAccount/>}/>
            </Stack>
        </Stack>
    );
};

export default HeaderSidebar;