import React, {FC, useState} from 'react';
import AccountCard from "../entities/components/accountCard";
import {Grid, Card, Stack, useMediaQuery} from "@mui/material";
import IconPlus from "../shared/assets/images/icons/iconPlus";
import AccountModal from "../entities/components/modal/accountModal";
import {NavLink} from "react-router-dom";

interface T {
    children?: any
}

const AccountCardList: FC<T> = ({children}) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    const [openModal, setOpenModal] = useState(false);
    return (
        <>
            <Grid container spacing={10} columns={16} wrap="wrap">
                <Grid item xs={16} md={8} onClick={() => setOpenModal(true)} sx={{cursor: "pointer"}}>
                    <Card sx={{height: mediaQuery ? 375 : 110}}>
                        <Stack justifyContent="center" alignItems="center" sx={{height: `100%`}}>
                            <Stack sx={{mb: 7}}>
                                <IconPlus/>
                            </Stack>
                            <Stack>Добавить счет</Stack>
                        </Stack>
                    </Card>
                </Grid>
                <Grid item xs={16} md={8}>
                    <NavLink to={`/exchange-account/${111}`}>
                        <AccountCard/>
                    </NavLink>
                </Grid>

                <Grid item xs={16} md={8}>
                    <AccountCard/>
                </Grid>
                <Grid item xs={16} md={8}>
                    <AccountCard addAccount="success"/>
                </Grid>
            </Grid>
            <AccountModal openModal={openModal} closeModal={setOpenModal}/>
        </>
    );
};

export default AccountCardList;