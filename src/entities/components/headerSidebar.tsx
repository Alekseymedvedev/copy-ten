import React, {FC} from 'react';
import {Avatar, Chip, Stack, useMediaQuery} from "@mui/material";
// @ts-ignore
import img from '../../shared/assets/images/amin-panel.png'
import IconAccount from "../../shared/assets/images/icons/iconAccount";

interface T {
    isAdmin?: boolean;
    name: string;
    images?: string;
    balance: string;
    account: string;
}


const HeaderSidebar: FC<T> = ({isAdmin,name, images, balance, account}) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    return (
        <Stack direction="row" spacing={7}>
            {
                (isAdmin && mediaQuery) ?
                <Stack>
                    <img src={img} alt="image"/>
                </Stack>
                    :  (!isAdmin) ?
                    <>
                        <Avatar
                            alt={name}
                            src={images}
                            sx={{width:mediaQuery ? 74 : 34, height:mediaQuery ? 74 : 34}}
                        />
                        <Stack
                            flexGrow={1}
                            spacing={2}
                            direction={mediaQuery ? "column": "row"}
                            justifyContent={mediaQuery ? "flex-start": "space-between"}
                        >
                            <Stack>
                                <div className="subHeaders white-80">@ryabishin</div>
                                <div className="h2">Виталий</div>
                            </Stack>
                            <Chip label={account} variant="outlined" color={"neutral"} icon={<IconAccount/>}/>
                        </Stack>
                    </>
                    : null
            }

        </Stack>
    );
};

export default HeaderSidebar;