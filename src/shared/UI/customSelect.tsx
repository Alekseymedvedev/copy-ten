import React, {FC, useEffect, useState} from 'react';
import {
    Checkbox, FormControl, InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    useMediaQuery
} from "@mui/material";

interface IType {
    title?: string;
    multiple?: boolean;
    defaultValue?: string;
    options?: { id: string, title: string; type: string | number }[];
    optionValue?: any;
}

const CustomSelect: FC<IType> = ({
                                 title,
                                 multiple,
                                 defaultValue,
                                 options,
                                     optionValue
                             }) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    const [variantName, setVariantName] = useState<string[]>([]);

    const handleChange = (event: SelectChangeEvent<typeof variantName>) => {
        const {target: {value}} = event;
        setVariantName(
            typeof value === 'string' ? value.split(',') : value,
        );
        optionValue(value)
    };
    return (
        <Stack direction="row" spacing={4} alignItems="center" sx={{width: !mediaQuery ? `100%` : 'unset'}}>
            {title && <span className="subHeaders white-80">{title}</span>}
            <FormControl fullWidth>
                <InputLabel
                    shrink={false}
                    sx={{
                    left: 24,
                    top: -8,
                    opacity: variantName.length > 0 ? 0 : 1
                }}>{defaultValue}</InputLabel>
                <Select
                    IconComponent={"select"}
                    fullWidth={!mediaQuery}
                    multiple={multiple}
                    value={variantName}
                    onChange={handleChange}
                >
                    {
                        (options !== undefined && options?.length > 0)
                            ? options?.map((option) => (
                                <MenuItem key={option.id} value={option.id}>
                                    {/*<Checkbox checked={variantName.indexOf(option.id) > -1}/>*/}
                                    {option.title}
                                </MenuItem>
                            ))
                            : null
                    }
                </Select>
            </FormControl>
        </Stack>
    );
};

export default CustomSelect;