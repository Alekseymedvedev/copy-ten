import React, {FC, useEffect} from 'react';
import {
    Checkbox,
    ListItemText,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    useMediaQuery
} from "@mui/material";

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
    const mediaQuery = useMediaQuery('(min-width:900px)');
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
        <Stack direction="row" spacing={4} alignItems="center" sx={ {width:!mediaQuery ?`100%` : 'unset'}}>
            {title && <span className="subHeaders white-80">{title}</span> }
                <Select
                    IconComponent={"select"}
                    fullWidth={!mediaQuery}
                    multiple={multiple}
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