import React, {FC} from 'react';
import ForexItem from "../entities/components/ForexItem";
import {Stack} from "@mui/material";
import CustomSelect from "../shared/UI/customSelect";
import CustomInput from "../shared/UI/customInput";
import User from "../entities/components/user";

interface IType {
    children?: any
}

const ForexList: FC<IType> = ({children}) => {
    return (
        <Stack spacing={7}>
            <Stack direction="row" justifyContent="space-between" spacing={7}>
                <Stack direction="row" spacing={7} sx={{maxWidth: 240}}>
                    <CustomSelect defaultValue="По дате"/>
                    <CustomSelect defaultValue="Подтвержденные"/>
                </Stack>
                <Stack sx={{maxWidth: 240}}>
                    <CustomInput search/>
                </Stack>
            </Stack>
            <ForexItem/>
        </Stack>

    );
};

export default ForexList;