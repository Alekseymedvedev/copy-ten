import React, {FC} from 'react';
import CustomInput from "../../shared/UI/customInput";
import {Chip, Stack} from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

interface IType {
    children?: any
}

const ForexItem: FC<IType> = ({children}) => {
    return (
        <Paper>
            <Stack spacing={7}>
                <CustomInput/>
                <CustomInput/>
                <CustomInput/>
                <Stack direction="row" justifyContent="space-between">
                    <span className="subHeaders white-90">Сервер счета</span>
                <Chip label="Сервер 1232" variant="outlined" color="neutral"/>
                </Stack>
               <Stack direction="row" justifyContent="space-between">
                   <Stack className="subHeaders" alignItems="center">
                       <span className="white-80">Дата заявки</span>
                       <span className="white-90">25.04.2022</span>
                   </Stack>
                    <Stack direction="row" spacing={7}>
                        <Button color="neutral">Причина</Button>
                        <Button color="error">Отклонено</Button>
                    </Stack>
                </Stack>
            </Stack>
        </Paper>
    );
};

export default ForexItem;