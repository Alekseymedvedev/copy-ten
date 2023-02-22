import React, {FC} from 'react';
import {Divider, Stack} from "@mui/material";

interface IType {
    children?: any
}

const CurrentValues: FC<IType> = ({children}) => {
    return (
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={7}>
            <Stack>
                <span className="subHeaders white-90">Прирост</span>
                <span className="subHeadersBold green">+22.49%</span>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem/>
            <Stack>
                <span className="subHeaders white-90">Просадка</span>
                <span className="subHeadersBold green">+22.49%</span>
            </Stack>
            <Divider orientation="vertical" variant="middle" flexItem/>
            <Stack>
                <span className="subHeaders white-90">Баланс</span>
                <span className="subHeadersBold green">+22.49%</span>
            </Stack>
        </Stack>
    );
};

export default CurrentValues;