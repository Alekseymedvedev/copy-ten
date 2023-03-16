import React, {FC} from 'react';
import {Stack, useMediaQuery} from "@mui/material";
import CustomSelect from "../shared/UI/customSelect";
import CustomInput from "../shared/UI/customInput";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

interface IType {
    children?: any
}

const BrokerServersList: FC<IType> = ({children}) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    return (
        <Stack spacing={7}>
            <Stack direction={mediaQuery ? "row" : "column"} justifyContent="space-between" spacing={7}>
                <Stack direction={mediaQuery ? "row" : "column"} spacing={7}>
                    <CustomSelect defaultValue="По дате"/>
                    <CustomSelect defaultValue="По сумме"/>
                </Stack>
                <Stack direction="row" spacing={7} sx={{maxWidth: mediaQuery ?240:null}}>
                    <CustomInput search/>
                </Stack>
            </Stack>
            <Paper>
                <Stack direction="row" justifyContent="space-between" spacing={7}>
                    <span>Сервер 112233</span>
                    <Stack direction="row" spacing={7}>
                        <Button color="neutral">Настройки</Button>
                        <Button color="error">Удалить</Button>
                    </Stack>
                </Stack>
            </Paper>
        </Stack>
    );
};

export default BrokerServersList;