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
    const mediaQuery = useMediaQuery('(max-width:900px)');
    return (
        <Stack direction="row" spacing={7}>
            {
                isAdmin ?
                <Stack>
                    <img src={img} alt="image"/>
                </Stack>
                    :
                    <>
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
                    </>
            }

        </Stack>
    );
};

export default HeaderSidebar;