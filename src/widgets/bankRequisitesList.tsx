import React, {FC} from 'react';
import BankRequisitesItem from "../entities/components/bankRequisitesItem";
import {Stack} from "@mui/material";
import CustomSelect from "../shared/UI/customSelect";
import CustomInput from "../shared/UI/customInput";
import ForexItem from "../entities/components/ForexItem";

interface IType {
    children?: any
}

const BankRequisitesList: FC<IType> = ({children}) => {
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
                <BankRequisitesItem/>
            </Stack>
    );
};

export default BankRequisitesList;