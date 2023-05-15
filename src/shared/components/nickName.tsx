import React, {FC} from 'react';
import {Avatar, Stack} from "@mui/material";
import CustomTooltip from "./customTooltip";
import {NavLink} from "react-router-dom";

interface IType {
    name: string;
    number?: number | string;
    avatar?: string;
    direction?: 'row-reverse' | 'row';
    justifyContent?: string;
    notMb?: any;
    strategy?: any;
}

const NickName: FC<IType> = ({strategy,name, number, avatar, direction, justifyContent, notMb}) => {

    return (
        <Stack
            mb={notMb ? 0 : 7}
            direction={direction ? direction : 'row'}
            alignItems="center"
            justifyContent={justifyContent ? justifyContent : "flex-start"}
            spacing={7}
        >
            <Stack spacing={2}>
                <span className="subHeaders white-80">{number}</span>
                <span className="subHeadersBold">{name}</span>
            </Stack>
            {
                avatar &&
                <CustomTooltip title={
                    <>
                        <span>{`Стратегия "${strategy}"`}</span>
                        <br/>
                    </>
                }
                >
                    <Avatar
                        alt={name}
                        src={avatar}
                        sx={{width: 34, height: 34}}
                    />
                </CustomTooltip>
            }
        </Stack>
    );
};

export default NickName;