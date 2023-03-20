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
    options?:string[];
    dataOption?: any;
}

const CustomSelect: FC<T> = ({title,multiple,defaultValue,options,dataOption}) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    const [variantName, setVariantName] = React.useState<string[]>([]);
    useEffect((() => {
        if (defaultValue) {
            setVariantName([defaultValue])
        }
    }), [])
    const handleChange = (event: SelectChangeEvent<typeof variantName>) => {

        const { target: { value } } = event;
        setVariantName(
            typeof value === 'string' ? value.split(',') : value,
        );
        dataOption(value)
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
                        (options !== undefined && options?.length > 0)
                            ? options?.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {/*<Checkbox checked={variantName.indexOf(option) > -1}/>*/}
                                    <ListItemText primary={option}/>
                                </MenuItem>

                            ))
                            : null
                    }
                </Select>
        </Stack>
    );
};

export default CustomSelect;