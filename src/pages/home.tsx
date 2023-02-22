import React, {FC} from 'react';
import MainLayout from "../widgets/mainLayout";
import AccountCardList from "../widgets/accountCardList";


const Home = () => {
    return (
        <MainLayout>
            <AccountCardList/>
        </MainLayout>
    );
};

export default Home;