import React, {FC, useEffect} from 'react';
import {Checkbox, FormControl, ListItemText, MenuItem, Select, SelectChangeEvent, Stack} from "@mui/material";
import IconSelect from "../assets/images/icons/iconSelect";

interface T {
    title?: string;
    multiple?: boolean;
    defaultValue?: string;
}

const names = [
    'Вариант 1',
    'Вариант 2',
];
const CustomSelect: FC<T> = ({title,multiple,defaultValue}) => {
    const [variantName, setVariantName] = React.useState<string[]>([]);
    useEffect((() => {
        if (defaultValue) {
            setVariantName([defaultValue])
        }
    }), [])
    const handleChange = (event: SelectChangeEvent<typeof variantName>) => {
        const {
            target: { value },
        } = event;
        setVariantName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <Stack direction="row" spacing={4} alignItems="center">
            {title && <span className="subHeaders white-80">{title}</span> }


                <Select
                    // IconComponent={<IconSelect/>}
                    multiple={multiple && true}
                    value={variantName}
                    onChange={handleChange}
                    displayEmpty={!!defaultValue}
                    renderValue={(selected) => selected.join(', ')}
                >
                    {
                        (names !== undefined && names?.length > 0)
                            ? names?.map((name) => (
                                <MenuItem key={name} value={name}>
                                    <Checkbox checked={variantName.indexOf(name) > -1}/>
                                    <ListItemText primary={name}/>
                                </MenuItem>

                            ))
                            : null
                    }
                </Select>
        </Stack>
    );
};

export default CustomSelect;