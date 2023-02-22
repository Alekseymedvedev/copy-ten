import React, {FC, useState} from 'react';
import AccountCard from "../entities/components/accountCard";
import {Grid, Card, Stack} from "@mui/material";
import IconPlus from "../shared/assets/images/icons/iconPlus";
import CustomModal from "../shared/components/customModal";
import {NavLink} from "react-router-dom";

interface T {
    children?: any
}

const AccountCardList: FC<T> = ({children}) => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <Grid container spacing={10} columns={16} wrap="wrap">

                <Grid item xs={8}>
                    <NavLink to={`/exchange-account/${111}`}>
                        <AccountCard/>
                    </NavLink>
                </Grid>

                <Grid item xs={8}>
                    <AccountCard/>
                </Grid>
                <Grid item xs={8}>
                    <AccountCard addError={true}/>
                </Grid>
                <Grid item xs={8} onClick={() => setOpenModal(true)} sx={{cursor: "pointer"}}>
                    <Card>
                        <Stack justifyContent="center" alignItems="center">
                            <Stack sx={{mb: 14}}> <IconPlus/></Stack>
                            <Stack>Добавить счет</Stack>
                        </Stack>
                    </Card>
                </Grid>
            </Grid>
            <CustomModal openModal={openModal} closeModal={setOpenModal}/>
        </>
    );
};

export default AccountCardList;