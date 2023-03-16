import React, {FC} from 'react';
import {Button, Divider, Stack, useMediaQuery} from "@mui/material";
import CustomSelect from "../shared/UI/customSelect";
import CustomInput from "../shared/UI/customInput";
import NickName from "../shared/components/nickName";
import Paper from "@mui/material/Paper";
import CurrentValues from "../entities/components/currentValues";

interface IType {
    children?: any
}

const TradersList: FC<IType> = ({children}) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    return (
        <Stack spacing={7}>
            <Stack direction={mediaQuery ? "row" : "column"} justifyContent="space-between" spacing={7}>
                <Stack direction={mediaQuery ? "row" : "column"} spacing={7}>
                    <CustomSelect defaultValue="По дате"/>
                    <CustomSelect defaultValue="По сумме"/>
                </Stack>
                <Stack direction="row" spacing={7} sx={{maxWidth: mediaQuery ? 240 : null}}>
                    <CustomInput search/>
                </Stack>
            </Stack>
            <Paper>
                <Stack direction={mediaQuery ? "row" : "column"} spacing={7}>
                    <NickName direction="row-reverse" name="NICKNAME_NICKNAME" number="18050009" justifyContent="flex-end"/>
                    <Divider orientation="vertical"/>
                    <CurrentValues/>
                    <Divider orientation="vertical"/>
                    <Stack direction="row" alignItems="center"spacing={7}>
                        <Button variant="outlined" color="error">Удалить</Button>
                        <Button variant="outlined" color="info">Страница</Button>
                        <Button variant="outlined" color="neutral">Настройки</Button>
                    </Stack>
                </Stack>
            </Paper>
        </Stack>
    );
};

export default TradersList;