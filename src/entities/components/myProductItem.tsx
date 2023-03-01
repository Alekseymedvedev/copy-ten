import React, {FC} from 'react';
import Paper from "@mui/material/Paper";
import {Avatar, Divider, Stack} from "@mui/material";
import {NavLink} from "react-router-dom";

interface IType {
    name?: string;
    avatar?:string;
}

const MyProductItem: FC<IType> = ({name,avatar}) => {
    return (
        <Paper>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" alignItems="center" spacing={7}>
                    <Avatar
                        variant="rounded"
                        alt={name}
                        src={avatar}
                        sx={{width: 34, height: 34}}
                    />
                    <Stack>
                        <NavLink className="link" to={'/'}>Счет 239238</NavLink>
                        <span className="subHeadersBold green">Копировальщик до 10.000$</span>
                    </Stack>
                </Stack>
                <Stack direction="row" alignItems="center" spacing={7}>
                    <Stack alignItems="center" spacing={2}>
                        <span className="subHeaders white-90">Статус</span>
                        <span className="subHeadersBold green">Активен</span>
                    </Stack>
                    <Divider orientation="vertical"/>
                    <Stack alignItems="center" spacing={2}>
                        <span className="subHeaders white-90">Дата валидности</span>
                        <span className="subHeadersBold">13.03.2023 (0 дней)</span>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    );
};

export default MyProductItem;