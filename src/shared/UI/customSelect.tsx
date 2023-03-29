import React, {FC, useEffect, useState} from 'react';
import {
    Checkbox, FormControl, FormHelperText, InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    useMediaQuery
} from "@mui/material";

interface IType {
    children?:any;
    title?: string;
    multiple?: boolean;
    defaultValue?: string;
    options?: any;
    optionValue?: any;
    isError?: boolean;
}

const CustomSelect: FC<IType> = ({
    children,
                                     title,
                                     multiple,
                                     defaultValue,
                                     options,
                                     optionValue,
                                     isError
                                 }) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    const [variantName, setVariantName] = useState(['']);
    const [error, setError] = useState(false);
    useEffect(() => {
        isError && setError(isError)
    }, [isError])

    const handleChange = (e: SelectChangeEvent<typeof variantName>) => {
        const {target: {value}} = e;
        setVariantName(
            typeof value === 'string' ? value.split(',') : value,
        );
        optionValue && optionValue(value)

        if (value !== '') setError(false)
    };
    return (
        <Stack direction="row" spacing={4} alignItems="center" justifyContent="space-between"
               sx={{width: !mediaQuery ? `100%` : 'unset'}}>
            {title && <Stack className="subHeaders white-80" sx={{width:`100%`}}>{title}</Stack>}
            <FormControl fullWidth error={error} >
                <InputLabel shrink={false} sx={{ left: 24,top: -8,opacity: variantName[0]  !== '' ? 0 : 1}}>
                    {defaultValue}
                </InputLabel>
                <Select
                    IconComponent={"select"}
                    fullWidth={!mediaQuery}
                    multiple={multiple}
                    value={variantName}
                    onChange={handleChange}
                >
                    {children}
                    {
                        (options !== undefined && options?.length > 0) &&
                             options?.map((option:any) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {/*<Checkbox checked={variantName.indexOf(option.id) > -1}/>*/}
                                    {option.title}
                                </MenuItem>
                            ))
                    }
                </Select>
                {error && <FormHelperText>Поле обязательно к заполнению</FormHelperText>}
            </FormControl>
        </Stack>
    );
};

export default CustomSelect;