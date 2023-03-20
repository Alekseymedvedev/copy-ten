import React, {FC, useState} from 'react';
import AccountCard from "../entities/components/accountCard";
import {Grid, Card, Stack, useMediaQuery} from "@mui/material";
import IconPlus from "../shared/assets/images/icons/iconPlus";
import AccountModal from "../entities/components/modal/accountModal";
import {NavLink} from "react-router-dom";
import {IUserAccounts} from "../types";

interface T {
    data: any;
    isLoading: boolean;
}

const AccountCardList: FC<T> = ({data, isLoading}) => {
    const mediaQuery = useMediaQuery('(min-width:900px)');
    const [openModal, setOpenModal] = useState(false);
    console.log(data?.data[0])
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
                {
                    data?.data && data?.data.map((item: IUserAccounts) =>
                        <Grid item xs={16} md={8} key={item.login}>
                            <NavLink to={`/exchange-account/${item.login}`}>
                                <AccountCard
                                    productType={item?.product?.product_data?.title}
                                    balance={item?.stats?.balance}
                                    accountNumber={item.login}
                                    accountType={item.server.type === 1 ? 'cent' : 'dollar'}
                                />
                            </NavLink>
                        </Grid>
                    )
                }


                <Grid item xs={16} md={8}>
                    <AccountCard addAccount="success"/>
                </Grid>
            </Grid>
            <AccountModal openModal={openModal} closeModal={setOpenModal}/>
        </>
    );
};

export default AccountCardList;