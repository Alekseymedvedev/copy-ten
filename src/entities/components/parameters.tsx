import React, {FC} from 'react';
import {IconButton, Stack} from "@mui/material";
import IconClose from "../../shared/assets/images/icons/iconClose";
import CustomSelect from "../../shared/UI/customSelect";
import Button from "@mui/material/Button";

interface IType {
    children?: any
}

const Parameters: FC<IType> = ({children}) => {
    return (
        <Stack spacing={7}
               sx={{p: `12px 8px`, border: `0.5px solid #3C3C3C`, borderRadius: 2.5}}>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" alignItems="center" spacing={4}>
                    <IconButton
                        className="red"
                        size="small"
                        sx={{p: 4, border: `0.5px solid #3C3C3C`, borderRadius: 1}}
                    >
                        <IconClose deleteBtn/>
                    </IconButton>
                    <span className="subHeaders white-90">Символы</span>
                </Stack>
                <CustomSelect multiple/>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" alignItems="center" spacing={4}>
                    <IconButton
                        className="red"
                        size="small"
                        sx={{p: 4, border: `0.5px solid #3C3C3C`, borderRadius: 1}}
                    >
                        <IconClose deleteBtn/>
                    </IconButton>
                    <span className="subHeaders white-90">Дни</span>
                </Stack>
                <CustomSelect multiple/>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Stack direction="row" alignItems="center" spacing={4}>
                    <IconButton
                        className="red"
                        size="small"
                        sx={{p: 4, border: `0.5px solid #3C3C3C`, borderRadius: 1}}
                    >
                        <IconClose deleteBtn/>
                    </IconButton>
                    <span className="subHeaders white-90">Часы</span>
                </Stack>
                <CustomSelect multiple/>
            </Stack>
            <Button color="success">Оптимизировать</Button>
            <Button color="error">Сброс</Button>
        </Stack>
    );
};

export default Parameters;