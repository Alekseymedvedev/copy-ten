import React, {FC} from 'react';
import User from "../entities/components/user";
import { Stack, TextField} from "@mui/material";
import CustomSelect from "../shared/UI/customSelect";
import CustomInput from "../shared/UI/customInput";

interface IType {
    children?: any
}

const UsersList: FC<IType> = ({children}) => {
    return (
        <Stack spacing={7}>
            <Stack direction="row" justifyContent="space-between" spacing={7}>
                <CustomSelect defaultValue="По дате"/>
                <Stack direction="row" spacing={7} sx={{maxWidth:240}}>
                    <CustomInput search/>
                </Stack>
            </Stack>
            <User/>
        </Stack>
    );
};

export default UsersList;