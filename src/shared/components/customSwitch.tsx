import React, {FC} from 'react';
import {Stack, Switch} from "@mui/material";

interface T {
    children?: any
}

const CustomSwitch: FC<T> = ({children}) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{
            padding:`12px 8px`,
            border: `0.5px solid #3C3C3C`,
            borderRadius: 2.5,
        }}
        >
            <span className="subHeaders">
                <span className="white-100">EURUSD </span>
                <span className="green">&nbsp;+5.12%</span>
            </span>
            <Switch defaultChecked size="small"/>
        </Stack>
    );
};

export default CustomSwitch;