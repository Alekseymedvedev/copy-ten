import React, {FC} from 'react';
import PersonalData from "../entities/components/personalData";
import {Grid, Stack} from "@mui/material";
import SelfEmployment from "../entities/components/selfEmployment";

interface IType {
    children?: any
}

const PersonalSetting: FC<IType> = ({children}) => {
    return (
            <Grid container spacing={10} columns={12} wrap="wrap" alignItems="stretch">
                <Grid item xs={6}>
                    <PersonalData/>
                </Grid>
                <Grid item xs={6}>
                    <SelfEmployment/>
                </Grid>
            </Grid>
    );
};

export default PersonalSetting;