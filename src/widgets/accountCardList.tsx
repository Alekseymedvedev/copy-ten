import React, {FC, useState} from 'react';
import AccountCard from "../entities/components/accountCard";
import {Grid, Card, Stack, useMediaQuery, Skeleton, Typography} from "@mui/material";
import IconPlus from "../shared/assets/images/icons/iconPlus";
import AccountModal from "../entities/components/modal/accountModal";
import {IUserAccounts} from "../types";
import {useGetAccountsQuery} from "../store/API/userApi";
import Paper from "@mui/material/Paper";

interface T {
}

const AccountCardList: FC<T> = ({}) => {
    const {data, error, isLoading} = useGetAccountsQuery('/accounts')
    const mediaQuery = useMediaQuery('(min-width:900px)');
    const [openModal, setOpenModal] = useState(false);

    if (error) {
        return (
            <Paper>
                <span className="h1">Не удалось загрузить данные счета</span>
            </Paper>
        )
    }
    return (
        <>
            <Grid container spacing={10} columns={16} wrap="wrap">
                <Grid item xs={16} md={8} onClick={() => setOpenModal(true)} sx={{cursor: "pointer"}}>
                    <Card sx={{height: mediaQuery ? 400 : 110}}>
                        <Stack justifyContent="center" alignItems="center" sx={{height: `100%`}}>
                            <Stack sx={{mb: 7}}>
                                <IconPlus/>
                            </Stack>
                            <Stack>Добавить счет</Stack>
                        </Stack>
                    </Card>
                </Grid>
                {
                    data?.data.map((item: IUserAccounts) =>
                        <Grid item xs={16} md={8} key={item.login}>
                                <AccountCard
                                    isLoading={isLoading}
                                    accountLogin={item.login}
                                    status={item.status}
                                    productType={item?.product?.product_data?.title}
                                    balance={item?.stats?.balance}
                                    accountNumber={item.login}
                                    accountType={item.server}
                                />
                        </Grid>
                    )
                }


                {/*<Grid item xs={16} md={8}>*/}
                {/*    <AccountCard addAccount="success"/>*/}
                {/*</Grid>*/}
            </Grid>
            <AccountModal openModal={openModal} closeModal={setOpenModal}/>
        </>
    );
};

export default AccountCardList;