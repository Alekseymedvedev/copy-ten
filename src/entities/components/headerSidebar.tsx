import React, {FC} from 'react';
import cls from '../headerSidebar/headerSidebar.module.scss'
import {Avatar, Chip, Stack} from "@mui/material";
import IconDollar from "../../shared/assets/images/icons/iconDollar";
import IconAccount from "../../shared/assets/images/icons/iconAccount";

interface T {
    name: string;
    images?: string;
    balance: string;
    account: string;
}


const HeaderSidebar: FC<T> = ({name, images, balance, account}) => {
    return (
        <Stack direction="row" spacing={7}>
            <Avatar
                alt={name}
                src={images}
                sx={{width: 74, height: 74}}
            />
            <Stack spacing={2}>
                <Stack>
                    <div className="white-80">@ryabishin</div>
                    <div className="h2">Виталий</div>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Chip label={account} variant="filled" icon={<IconAccount/>}/>
                    <Chip label={balance} color="warning" variant="filled" icon={<IconDollar/>}/>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default HeaderSidebar;