import React, {FC} from 'react';
import {Divider, Stack, useMediaQuery} from "@mui/material";
import CustomSwitch from "../../shared/components/customSwitch";

interface T {
    children?: any
}

const SwitchList: FC<T> = ({children}) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    return (
        <Stack sx={{
            padding: `20px 14px`,
            background: `linear-gradient(180deg, rgba(31, 31, 31, 0) 0%, #1F1F1F 100%)`,
            border: `0.5px solid #3C3C3C`,
            borderRadius: 2.5,
            flexGrow: 1,
            maxWidth:mediaQuery ? 220: `100%`,
            width:`100%`,
            maxHeight: 315,
            overflow:'hidden',
            overflowY: 'scroll'
        }}
        >

            <Stack mb={8} className="subheaders white-90">168 Инстр.</Stack>
            <Divider/>
            <Stack spacing={6}>
                <CustomSwitch/>
                <CustomSwitch/>
                <CustomSwitch/>
                <CustomSwitch/>
                <CustomSwitch/>
                <CustomSwitch/>
                <CustomSwitch/>
                <CustomSwitch/>
            </Stack>
        </Stack>
    );
};

export default SwitchList;