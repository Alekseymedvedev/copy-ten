import React, {FC} from 'react';
import {Button, Divider, Stack} from "@mui/material";
import CustomInput from "../../shared/UI/customInput";

interface IType {
    children?: any
}

const SettingsItem: FC<IType> = ({children}) => {
    return (
        <Stack sx={{    height: `100%`,p: `28px`, border: `0.5px solid #3C3C3C`, borderRadius: 2.5}}>
            <Stack className="h2 white-90" sx={{mb: 14}}>Личные данные</Stack>
            <Divider/>
            <Stack spacing={7}>
                <CustomInput label="Имя"/>
                <CustomInput label="Фамилия"/>
                {children}
            </Stack>
        </Stack>
    );
};

export default SettingsItem;