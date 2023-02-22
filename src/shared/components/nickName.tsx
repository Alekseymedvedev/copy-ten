import React, {FC} from 'react';
import {Avatar, Stack} from "@mui/material";

interface IType {
    name: string;
    number: number | string;
    avatar?: string;
    direction?: 'row-reverse' | 'row';
    justifyContent?: string;
}

const NickName: FC<IType> = ({name,number,avatar,direction,justifyContent}) => {
    return (
        <Stack
            mb={7}
            direction={direction ? direction : 'row'}
            alignItems="center"
            justifyContent={justifyContent ? justifyContent : "flex-start"}
            spacing={7}
        >
            <Stack spacing={2}>
                <span className="subHeaders white-80">{number}</span>
                <span className="subHeadersBold">{name}</span>
            </Stack>
            <Avatar
                alt={name}
                src={avatar}
                sx={{width: 34, height: 34}}
            />
        </Stack>
    );
};

export default NickName;