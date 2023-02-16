import React, {FC, useState} from 'react';
import {FormControl, IconButton, InputAdornment, InputBase, InputLabel, OutlinedInput, TextField} from "@mui/material";
import IconSearch from "../../assets/images/icons/iconSearch";

interface T {
    typeInput?: 'small' | 'medium' | 'password' | 'search' | string;
    icon?: string;
    color?: string;
    label?: string;
}

const CustomInput: FC<T> = ({typeInput, icon}) => {
    const [showPassword, setShowPassword] = useState(false);
    const [colorType, setColorType] = useState('primary');
    if (typeInput === "small") {
        return (
            <>


            </>
        )
    }
    if (typeInput === "password") {
        return (
            <>
                <FormControl fullWidth sx={{ m: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        endAdornment={<InputAdornment position="end"> <IconSearch/></InputAdornment>}
                        label="Amount"

                    />
                </FormControl>
                {/*<TextField*/}
                {/*    id="outlined-number"*/}
                {/*    label="Логин"*/}
                {/*    // color="neutral"*/}
                {/*    type="password"*/}
                {/*    helperText="Incorrect entry."*/}
                {/*    InputLabelProps={{*/}
                {/*        shrink: true,*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <IconSearch/>*/}
                {/*</TextField>*/}
            </>
        )
    }
    // Type '{ startAdornment: Element; size: "small"; placeholder: string; InputLabelProps: { shrink: boolean; }; }'
    if (typeInput === "search") {
        return (
            <>
                <OutlinedInput
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                            >
                                {showPassword ? <IconSearch/> : <IconSearch/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    size="small"
                    placeholder="Поиск"
                />
            </>
            // <>
            //     <InputBase
            //         size="small"
            //         sx={{ml: 1, flex: 1}}
            //         placeholder="Поиск"
            //     />
            // </>
        )
    }
    return (
        <>
            {/*<TextField size="medium"*/}
            {/*           onFocus={() => {*/}
            {/*               setColorType('primary')*/}
            {/*           }}*/}
            {/*           color="neutral" label="Outlined secondary" focused type={showPassword ? 'text' : 'password'}/>*/}
            <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                    shrink: true,
                }}
            >
                <IconSearch/>
            </TextField>
        </>
    );
};

export default CustomInput;