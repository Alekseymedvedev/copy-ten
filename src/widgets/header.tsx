import React, {FC, useEffect} from 'react';
import {
    Typography,
    Stack,
    FormControl,
    Select,
    OutlinedInput,
    MenuItem,
    ListItemText,
    Checkbox,
    SelectChangeEvent, InputLabel
} from "@mui/material";
import CustomSelect from "../shared/UI/customSelect";

interface T {
    children?: any
}


const Header: FC<T> = ({children}) => {


    return (
        <header>
            <Stack direction="row" spacing="auto" alignItems="center">
                <Typography variant="h1">Мои счета </Typography>
                <CustomSelect title="Выбор счета"/>
            </Stack>
        </header>
    );
};

export default Header;