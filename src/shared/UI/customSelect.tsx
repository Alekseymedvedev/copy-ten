import React, {FC, useEffect} from 'react';
import {Checkbox, FormControl, ListItemText, MenuItem, Select, SelectChangeEvent, Stack} from "@mui/material";

interface T {
    title?: string;
}

const names = [
    'Вариант 1',
    'Вариант 2',
];
const CustomSelect: FC<T> = ({title}) => {
    const [variantName, setVariantName] = React.useState<string[]>([]);
    useEffect((() => {
        if (names.length) {
            setVariantName(['Выбор счета'])
        } else {
            setVariantName(['Нет счетов'])
        }
    }), [])
    const handleChange = (event: SelectChangeEvent<typeof variantName>) => {

        const {
            target: {value},
        } = event;
        setVariantName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <Stack direction="row" spacing={4} alignItems="center">
            {title && <span className="white-80">{title}</span> }


            <FormControl>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    value={variantName}
                    onChange={handleChange}
                    renderValue={(selected) => selected}
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
            </FormControl>
        </Stack>
    );
};

export default CustomSelect;