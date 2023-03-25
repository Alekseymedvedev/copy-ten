import React, {FC, useState} from 'react';
import {IconButton, TextField} from "@mui/material";
import IconPassword from "../assets/images/icons/iconPassword";
import IconSearch from "../assets/images/icons/iconSearch";

interface T {
    label?: string;
    isRequired?: boolean;
    search?: boolean;
    dataInput?:any;
    // onChange?:(value:number | string)=>void;
}

const CustomInput: FC<T> = ({
                                label,
                                isRequired,
                                search,
                                dataInput}) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <>
            {
                search ?
                    <TextField
                        fullWidth
                        size="small"
                        type="search"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            startAdornment:
                                <IconButton size="small"
                                >
                                    <IconSearch/>
                                </IconButton>
                        }}
                    />
                    :
                    <TextField
                        {...dataInput}
                        required={isRequired ? true : undefined}
                        fullWidth
                        // error={error}
                        // onChange={(e)=>{ onChange && onChange(+e.target.value)}}
                        helperText={dataInput.error && "Поле обязательно к заполнению"}
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
            }

        </>
    );
};

export default CustomInput;