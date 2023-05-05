import React, {FC} from 'react';
import {Divider, Stack, useMediaQuery} from "@mui/material";

interface IType {
    stats?: any
}

const CurrentValues: FC<IType> = ({stats}) => {
    const mediaQuery = useMediaQuery('(min-width:980px)');

    return (
        <Stack direction={"row"} alignItems="center" justifyContent="space-between" spacing={7}>
            <Stack alignItems="center">
                <span className="subHeaders white-90">Просадка</span>
                <span className={stats?.dropdown >0 ? "subHeadersBold green": "subHeadersBold red"}>{stats?.dropdown}%</span>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem/>
            <Stack alignItems="center">
                <span className="subHeaders white-90">Все время</span>
                <span className= {stats?.gain?.all >0 ? "subHeadersBold green": "subHeadersBold red"}>{stats?.gain?.all}%</span>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem/>
            <Stack alignItems="center">
                <span className="subHeaders white-90">Тек. месяц</span>
                <span className={stats?.gain?.current_month >0 ? "subHeadersBold green": "subHeadersBold red"}>{stats?.gain?.current_month}%</span>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem/>
            <Stack alignItems="center">
                <span className="subHeaders white-90">Значение</span>
                <span className={stats?.balance >0 ? "subHeadersBold green": "subHeadersBold red"}>{stats?.balance}%</span>
            </Stack>
            <Stack
                className="subHeaders yellow"
                alignItems="center"
                justifyContent="center"
                sx={{
                    width: 34,
                    height: 34,
                    border: ` 0.5px solid #3C3C3C`,
                    borderRadius: `50%`,
                    position: !mediaQuery ?'absolute':'static',
                    right:14,
                    top:14,
                }}
            >{stats?.deposit_load}%</Stack>
        </Stack>
    );
};

export default CurrentValues;