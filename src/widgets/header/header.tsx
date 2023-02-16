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

interface T {
    children?: any
}

const names = [
    'Вариант 1',
    'Вариант 2',
];
const Header: FC<T> = ({children}) => {
    const [variantName, setVariantName] = React.useState<string[]>([]);
    useEffect((()=>{
        if(names.length){
            setVariantName(['Выбор счета'])
        }else{
            setVariantName(['Нет счетов'])
        }
    }),[])
    const handleChange = (event: SelectChangeEvent<typeof variantName>) => {

        const {
            target: {value},
        } = event;
        setVariantName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    return (
        <header>
            <Stack direction="row" spacing="auto" alignItems="center">
                <Typography variant="h1">Мои счета </Typography>
                <Stack direction="row" spacing={4} alignItems="center">
                    <span className="white-80">Выбор счета</span>
                    <FormControl>
                        <Select
                            labelId="demo-multiple-checkbox-label"
                            id="demo-multiple-checkbox"
                            value={variantName}
                            onChange={handleChange}
                            renderValue={(selected) => selected}
                        >
                            {
                                (names !==undefined && names?.length > 0)
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
            </Stack>
        </header>
    );
};

export default Header;