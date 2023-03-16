import React, {FC} from 'react';
import ForexItem from "../entities/components/ForexItem";
import {Stack, useMediaQuery} from "@mui/material";
import CustomSelect from "../shared/UI/customSelect";
import CustomInput from "../shared/UI/customInput";

interface IType {
    children?: any
}

const ForexList: FC<IType> = ({children}) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    return (
        <Stack spacing={7}>
            <Stack direction={mediaQuery ? "row" : "column"} justifyContent="space-between" spacing={7}>
                <Stack direction={mediaQuery ? "row" : "column"} spacing={7}>
                    <CustomSelect defaultValue="По дате"/>
                    <CustomSelect defaultValue="Подтвержденные"/>
                </Stack>
                <Stack sx={{maxWidth: mediaQuery ? 240: null}}>
                    <CustomInput search/>
                </Stack>
            </Stack>
            <ForexItem/>
        </Stack>

    );
};

export default ForexList;