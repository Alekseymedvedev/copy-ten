import React, {FC} from 'react';
import MyProductItem from "../entities/components/myProductItem";
import Paper from "@mui/material/Paper";
import {Chip, Stack} from "@mui/material";

interface IType {
    children?: any
}

const MyProductsList: FC<IType> = ({children}) => {
    return (
        <Paper>
            <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{mb:7}}>
                <span className="h2 white-90">Мои продукты</span>
                <Stack direction="row" spacing={7}>
                    <Chip label="Все" color="neutral"/>
                    <Chip label="Счет 1" color="neutral"/>
                    <Chip label="Счет 2" color="neutral"/>
                </Stack>
            </Stack>
            <MyProductItem/>
        </Paper>
    );
};

export default MyProductsList;