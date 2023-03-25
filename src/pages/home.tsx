import React from 'react';
import MainLayout from "../widgets/mainLayout";
import AccountCardList from "../widgets/accountCardList";
import {useGetServersQuery} from "../store/API/userApi";


const Home = () => {
    const {data:isData} = useGetServersQuery('/servers')
    return (
        <MainLayout heading="Мои счета">
            <AccountCardList/>
        </MainLayout>
    );
};
export default Home;