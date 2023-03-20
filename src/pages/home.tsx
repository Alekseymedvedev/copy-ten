import React from 'react';
import MainLayout from "../widgets/mainLayout";
import AccountCardList from "../widgets/accountCardList";
import {useAddAccountMutation, useGetAccountsQuery} from "../store/userApi";
import {Skeleton} from "@mui/material";


const Home = () => {
    const {data, error, isLoading} = useGetAccountsQuery('/accounts')

    console.log(data)
    console.log(error)
    console.log(isLoading)
    if (isLoading) {
        return <Skeleton sx={{height: 190}} animation="wave" variant="rectangular"/>
    }
    return (
        <MainLayout heading="Мои счета">
            <AccountCardList data={data} isLoading={isLoading}/>
        </MainLayout>
    );
};
export default Home;