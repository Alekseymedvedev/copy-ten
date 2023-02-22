import React, {FC, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import IconPassword from "../../assets/images/icons/iconPassword";

interface T {
    label?: string;
    isRequired?: boolean;
}

const CustomInput: FC<T> = ({label, isRequired}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <>
            <TextField
                required={isRequired ? true : undefined}
                fullWidth
                label={label}
                type={showPassword ? 'text' : 'password'}
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    endAdornment:
                        <IconButton size="small"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                        >
                            <IconPassword visible={showPassword}/>
                        </IconButton>
                }}
            />
        </>
    );
};

export default CustomInput;